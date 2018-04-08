import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { NgModule } from '@angular/core';
import { MessageWrapperComponent } from './message-wrapper/message-wrapper';
import { LongPressModule } from 'ionic-long-press';
import { SpeechButtonComponent } from './speech-button/speech-button';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { NoConnectionModalComponent } from './no-connection-modal/no-connection-modal';
@NgModule({
	declarations: [MessageWrapperComponent,
    SpeechButtonComponent,
    NoConnectionModalComponent],
	imports: [SpeechRecognition,
	LongPressModule,
	TextToSpeech],
	exports: [MessageWrapperComponent,
    SpeechButtonComponent,
    NoConnectionModalComponent]
})
export class ComponentsModule {}
