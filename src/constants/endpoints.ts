//localhost
const BASE_URL = "http://192.168.1.238:5005";

export const Endpoints = {

    PARSE_TEXT : BASE_URL + "/conversations/{userId}/parse",
    CONTINUE : BASE_URL + "/conversations/{userId}/continue"
}