import { DefaultFlowConfig } from './botFlowConfig/defaultFlowConfig';
import { BotFlowConfig } from './botFlowConfig/botFlowConfig';
import { ListenAction } from './../botActions/listenAction';
import { BotAction } from './../botActions/botAction';
import { BotResources } from '../botResources';
import { RasaEvent } from '../../rasaPetition/rasaEvent';
import { RasaEvents } from '../../rasaPetition/rasaEvents';
import { Config } from '../../../constants/config';
import { ActionResponse } from '../../rasaResponse/actionResponse';
import { ActionFactory } from '../actionFactory';
import { BotFlowController } from './botFlowController';

export class botFlowControllerImpl implements BotFlowController {
  action: BotAction;
  botResources: BotResources;
  botFlowConfig: BotFlowConfig = new DefaultFlowConfig();


  setBotFlowConfig(botFlowConfig: BotFlowConfig) {
    this.botFlowConfig = botFlowConfig;
  }
  getBotFlowConfig(): BotFlowConfig {
    return this.botFlowConfig;
  }

  constructor(botResources: BotResources) {
    this.botResources = botResources;
  }

  welcome() {
    this.botResources
      .getRasaProvider()
      .continue(
        Config.rasaSupportedActions.goodbye,
        new RasaEvent(RasaEvents.restart)
      )
      .subscribe(res => {
        this.action = ActionFactory.createActionFromName(Config.rasaSupportedActions.greet ,this.botResources, this,null);
        let rEvent = this.action.execute();
        this.takeNextAction(this.action, rEvent);
      });
  }

  processUserMessage(message: string) {
    this.botResources
      .getRasaProvider()
      .parse(message)
      .subscribe(
        res => {
          this.action = ActionFactory.createActionFromResponse(
            res,
            this.botResources,
            this
          );

          if (!this.checkActionAllowed(this.action)) {
            //If the action is not allowed -> we didn't understand
            ActionFactory.createActionFromName(Config.builtInActions.wrong, this.botResources, this, null).execute();
            return;
          }
          let rEvent = this.action.execute();

          this.takeNextAction(this.action, rEvent);
        },
        error =>
          this.botResources
            .getEvents()
            .publish(Config.EventErrors.NO_CONNECTION, "BZZZ, NO CONECTION")
      );
  }

  private checkActionAllowed(action: BotAction) {
    console.log(this.botFlowConfig.getAllowedActions())
    console.log(this.botFlowConfig.getAllowedActions().indexOf(this.action.getRasaEncodingName()))
    return (this.botFlowConfig.getAllowedActions().indexOf(this.action.getRasaEncodingName()) !=-1 
      ||  this.botFlowConfig.getAllowedActions().indexOf("*") != -1);
  }

  takeNextAction(lastExecutedAction: BotAction, rEvent: RasaEvent) {
    this.botResources
      .getRasaProvider()
      .continue(lastExecutedAction.getRasaEncodingName(), rEvent)
      .subscribe(
        res => {
          this.recursiveProcessAction(res);
        },
        error =>
          this.botResources
            .getEvents()
            .publish(Config.EventErrors.NO_CONNECTION, "BZZZ, NO CONNECTION")
      );
  }

  recursiveProcessAction(actResponse: ActionResponse) {
    this.action = ActionFactory.createActionFromResponse(
      actResponse,
      this.botResources,
      this
    );
    if (this.action instanceof ListenAction) {
      return;
    }
    let rEvent = this.action.execute();
    this.botResources
      .getRasaProvider()
      .continue(this.action.getRasaEncodingName(), rEvent)
      .subscribe(
        res => {
          this.recursiveProcessAction(res);
        },
        error =>
          this.botResources
            .getEvents()
            .publish(Config.EventErrors.NO_CONNECTION, "BZZZZ, NO CONNECTION")
      );
  }
}
