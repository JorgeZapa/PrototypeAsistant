export const Config = {

    botName: "demencio",
    rasaSupportedActions:{
        greet:"utter_greet",
        location: "utter_give_location",
        give_name: "utter_give_name",
        give_number:"utter_give_number",
        goodbye: "utter_goodbye",
        listen: "action_listen",
        lost: "utter_lost",
        distance: "utter_distance",
        go_home: "utter_go_home"
    },
    builtInActions:{
        wrong: "wrong"
    },
    templateSMSMessage: "This is a message from Demencio. \n" +
     "As this number was registered as SOS number we are sending you the coordinates of the lost client: \n"+
     "Latitude: {lat} \nLongitude: {lon} ."

}