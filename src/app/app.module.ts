// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { GoogleCloudSpeechService } from './services/google-cloud-speech.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { VoiceComponent } from './components/voice/voice.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GoogleCloudSpeechService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
