import { Config } from './../../../../constants/config';
import { BotFlowConfig } from "./botFlowConfig";

export class DefaultFlowConfig implements BotFlowConfig {
    getAllowedActions(): string[] {
        return Config.configFlowAllowedActions.default;
    }
}