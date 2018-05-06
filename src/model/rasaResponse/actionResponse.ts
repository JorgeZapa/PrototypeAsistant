export class ActionResponse{
    public next_action:string;
    public tracker: Tracker;
}

export class Tracker{
    slots: Slots;
    latest_message: LatestMessage;
}

export class Slots{
    PERSON: string;
    number: number;
}

export class LatestMessage{
    intent: Intent;
    text: string;
}

export class Intent{
    confidence: number;
    name: string;
}