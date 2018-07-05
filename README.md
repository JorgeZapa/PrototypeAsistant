# PrototypeChatbot

Chat application wich allows its user to communicate with Ludobot, the gamer chatbot.

![alt text](https://raw.githubusercontent.com/JorgeZapa/PrototypeChatbot/master/www/assets/imgs/LudobotLogoNoBg.png)

This chatbot uses an Hybrid NLU, combining a machine learning NLU with a pattern matching NLU basing its decision to
follow one or the other in the confidence factor given from the predicion of the machine learning NLU.

Ludobot can speak about certain popular games such as Fortnite, Clash of Clans, Clash Royale or even any game you have recently played
but it can also help you to:
* Find your way home.
* Send an SOS SMS message to the stored SOS phone in case you get lost.
* Show the your distance from where you are to your home.
* change your home location.

### Prerequisites

In order to run the application successfully you will need to have up and running [this project](https://github.com/JorgeZapa/RasaPrototype).
But you will also need:

* NodeJS
* Ionic 3

And if you want to try it on a real device:

* AndroidSDK - If you own an Android smartphone.
* Xcode - If you own an iPhone smartphone.


### Execution
Once you have downloaded the project move into it and follow the steps that are shown here.

Before executing anything you must keep in mind where the [Rasa project](https://github.com/JorgeZapa/RasaPrototype) is running and on the ./src/cosntants/endpoints.ts
file you must change the following:
```typeScript
const BASE_URL = "http://{IP_of_the_device_running_Rasa}:5005"
```

First we need to install all the needed dependencies:
```
npm install
```

We execute it on the browser:

```
Ionic serve
```

If you want to package it and try it on your real device (select one, android or ios):

```
Ionic cordova run [android|ios]
```


## Running the tests
First we initialize the applciation on the local:
```
Ionic serve
```

And then we execute the end to end tests:
```
npm run e2e
```
This will start the tests automatically sending the messages to Ludobot through its interface testing the different flows.

## How does Ludobot work?
As said in the description, we use a hybrid NLU where based on the confidence factor of the machine learning NLU we decide to trust
the machine learning NLU or the pattern matching NLU, in the following picture, a graphic explanation of the whole project is given:

![alt text](https://raw.githubusercontent.com/JorgeZapa/PrototypeChatbot/master/LudobotContextDiagram.jpg)
1.	**Domain expert**: This actor is in charge of changing the file that trains the Rasa model as well as chaining the conversational flows editing the RiveScript file of the application.
2.	**Rasa Training files**: These files are fed into Rasa generating the trained model before serving it though an REST API.
3.	**Rasa**: The trained model representing the machine learning NLU.
4.	**RiveScipt File**: This file determines the flow and different responses from a given utterance in the conversational flow.
5.	**RiveScript**: Tool that controls the conversational flow representing the pattern matching NLU.
6.	**BotController**: This element represents all the classes that are executed in the application, which take care of the view and the management to decide which flow is followed and thus, which NLU is “trusted”.
7.	**Teenager**: The main actor of the system which interacts with the chatbot through the application.
8.	**The local database**: Represents the database which will locally but persistently save the needed data from the user.


## Built With

* [Ionic 3](https://ionicframework.com/) - Hybrid smatphone application framework
* [Rasa](https://rasa.com/) - Machine learning NLU
* [RiveScript](https://www.rivescript.com/) - Pattern matching NLU

## Authors

* **Jorge Zapatero Sánchez** - [JorgeZapa](https://github.com/JorgeZapa)

