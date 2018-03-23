export const Config = {
  botName: "demencio",
  EventErrors: {
    NO_CONNECTION: "NO_CONNECTION"
  },
  EventSend:{
    SEND_BOT_MESSAGE: "SEND_BOT_MESSAGE"
  },
  EventChangeState:{
    CHANGE_BOT_STATE: "CHANGE_BOT_STATE"
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
    go_home: "utter_go_home"
  },
  builtInActions: {
    wrong: "wrong"
  },
  StateBotAllowedActions:{
    welcome:["utter_greet","utter_give_location",
    "utter_give_name","utter_give_number", "utter_no_name",
    "utter_no_number"],
    default:["*"]
  },
  templateSMSMessage:
    "This is a message from Demencio. \n" +
    "As this number was registered as SOS number we are sending you the coordinates of the lost client: \n" +
    "Latitude: {lat} \nLongitude: {lon} ."
};
