//localhost
const BASE_URL = "http://192.168.0.29:5005";

export const Endpoints = {

    PARSE_TEXT : BASE_URL + "/conversations/{userId}/parse",
    CONTINUE : BASE_URL + "/conversations/{userId}/continue",
    SEND_EVENT: BASE_URL + "/conversations/{userId}/tracker/events"
}