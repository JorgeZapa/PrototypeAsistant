import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { NgModule } from '@angular/core';
import { MessageWrapperComponent } from './message-wrapper/message-wrapper';
import { LongPressModule } from 'ionic-long-press';
import { SpeechButtonComponent } from './speech-button/speech-button';
import { TextToSpeech } from '@ionic-native/text-to-speech';
@NgModule({
	declarations: [MessageWrapperComponent,
    SpeechButtonComponent],
	imports: [SpeechRecognition,
	LongPressModule,
	TextToSpeech],
	exports: [MessageWrapperComponent,
    SpeechButtonComponent]
})
export class ComponentsModule {}
