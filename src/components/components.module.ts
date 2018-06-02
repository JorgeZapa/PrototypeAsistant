import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { NgModule } from '@angular/core';
import { MessageWrapperComponent } from './message-wrapper/message-wrapper';
import { LongPressModule } from 'ionic-long-press';
import { SpeechButtonComponent } from './speech-button/speech-button';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { NoConnectionModalComponent } from './no-connection-modal/no-connection-modal';
import { SpeechModalComponent } from './speech-modal/speech-modal';
@NgModule({
	declarations: [MessageWrapperComponent,
    SpeechButtonComponent,
    NoConnectionModalComponent,
    SpeechModalComponent],
	imports: [SpeechRecognition,
	LongPressModule,
    TextToSpeech],
	exports: [MessageWrapperComponent,
    SpeechButtonComponent,
    NoConnectionModalComponent,
    SpeechModalComponent]
})
export class ComponentsModule {}
