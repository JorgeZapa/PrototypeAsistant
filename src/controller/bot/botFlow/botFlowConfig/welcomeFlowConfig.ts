import { BotFlowConfig } from "./botFlowConfig";
import { Config } from "../../../../constants/config";

export class WelcomeFlowConfig implements BotFlowConfig {
    getAllowedActions(): string[] {
        return Config.StateBotAllowedActions.welcome;
    }
}