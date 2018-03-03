export class ActionResponse{
    public next_action:string;
    public tracker: Tracker;
}

class Tracker{
    slots: Slots;
}

class Slots{
    name: string;
    number: number;
}