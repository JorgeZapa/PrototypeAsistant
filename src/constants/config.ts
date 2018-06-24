export const Config = {
  botName: "Ludobot",
  version:"1.0",
  EventErrors: {
    NO_CONNECTION: "NO_CONNECTION"
  },
  EventSend:{
    SEND_BOT_MESSAGE: "SEND_BOT_MESSAGE"
  },
  EventChangeState:{
    CHANGE_BOT_STATE: "CHANGE_BOT_STATE"
  },
  EventFinishProcessing:{
    FINISH_PROCESSING: "FINISH_PROCESSING"
  },
  rasaSupportedActions: {
    greet: "utter_greet",
    location: "utter_give_location",
    give_name: "utter_give_name",
    no_name: "utter_no_name",
    give_number: "utter_give_number",
    no_number: "utter_no_number",
    listen: "action_listen",
    lost: "utter_lost",
    distance: "utter_distance",
    go_home: "utter_go_home",
    change_location: "utter_change_location",
  },
  builtInActions: {
    wrong: "wrong",
    converse: "converse"
  },
  confidenceThreshold:{
    listen: 0,
    lost: 0.522061735,
    distance: 0.438319301,
    go_home: 0.47887404,
    change_location: 0.353202307,
  },
  StateBotAllowedActions:{
    welcome:["utter_give_location",
    "utter_give_name","utter_give_number", "utter_no_name",
    "utter_no_number"],
    default:["action_listen", "utter_lost", "utter_distance","converse",  "utter_change_location", "utter_go_home"]
  },
  templateSMSMessage:
    "This is a message from Demencio. \n" +
    "As this number was registered as SOS number we are sending you the coordinates of the lost client: \n" +
    "Latitude: {lat} \nLongitude: {lon} ."
};
