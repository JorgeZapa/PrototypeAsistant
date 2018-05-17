export const Config = {
  botName: "Dedisco",
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
    goodbye: "utter_goodbye",
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
    utter_greet: 61,
    utter_give_location: 0,
    utter_give_name: 0,
    utter_no_name: 0,
    utter_give_number: 0,
    utter_no_number: 0,
    utter_goodbye: 0,
    action_listen: 0,
    utter_lost: 49,
    utter_distance: 25,
    utter_go_home: 20,
    utter_change_location: 20,

  },
  StateBotAllowedActions:{
    welcome:["utter_give_location",
    "utter_give_name","utter_give_number", "utter_no_name",
    "utter_no_number"],
    default:["*"]
  },
  templateSMSMessage:
    "This is a message from Demencio. \n" +
    "As this number was registered as SOS number we are sending you the coordinates of the lost client: \n" +
    "Latitude: {lat} \nLongitude: {lon} ."
};
