import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudSpeechService {

  private SPEECH = require('@google-cloud/speech');
  private RECORD = require('node-record-lpcm16');
  private readonly GOOGLE_APPLICATION_CREDENTIALS = "app/data/keyfile.json";

  public client: any;
  public uri: string;
  public config: Object;
  public request;

  constructor() {
    this.client = new this.SPEECH.SpeechClient({
      projectId: 'angularmaterial-248512',
      keyFilename: this.GOOGLE_APPLICATION_CREDENTIALS
    });
  }

  // Set/Get Configuration Options for a request
  getConfigOptions(_encoding?: string, _sampleRHrtz?: number, _langCode?: string) {
    if (_encoding == null || _encoding == undefined) {
      return this.config = {
        encoding: 'utf8',
        sampleRateHertz: 16000,
        languageCode: 'es-ES'
      }

    } else {
      return this.config = {
        encoding: _encoding,
        sampleRateHertz: _sampleRHrtz,
        languageCode: _langCode
      }
    }
  }

  // CREATE REQUEST
  createRequest(_config: Object, _interRes?: boolean) {
    if (_interRes == undefined || _interRes == null) {
      _interRes = false;
    }

    return this.request = {
      config: _config,
      interimResults: _interRes
    }
  }

  // Create a recognize stream
  createRecognizeStream() {
    return this.client
    .streamingRecognize(this.request)
    .on('error', console.error)
    .on('data', data =>
      process.stdout.write(
        data.results[0] && data.results[0].alternatives[0]
          ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
          : `\n\nReached transcription time limit, press Ctrl+C\n`
      )
    );
  }

  // Start recording and send the microphone input to the Speech API
  

}
