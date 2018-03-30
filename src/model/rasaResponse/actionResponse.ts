export class ActionResponse{
    public next_action:string;
    public tracker: Tracker;
}

class Tracker{
    slots: Slots;
}

export class Slots{
    PERSON: string;
    number: number;
}