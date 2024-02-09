/**
 * EXAMPLE REQUEST
 * POST /v2/translate HTTP/2
 * Host: api-free.deepl.com
 * Authorization: DeepL-Auth-Key [yourAuthKey]
 * User-Agent: YourApp/1.2.3
 * Content-Length: 45
 * Content-Type: application/json
 *
 * {"text":["Hello, world!"],"target_lang":"DE"}
 *
 * EXAMPLE RESPONSE
 * {
 *  "translations": [
 *     {
 *       "detected_source_language": "EN",
 *       "text": "Hallo, Welt!"
 *     }
 *   ]
 * }
 */

import {Component} from '@angular/core';

const API_KEY = 'YOUR_KEY';
const API_URL = 'https://api-free.deepl.com/v2/translate';

@Component({
  selector: 'app-deepl',
  templateUrl: './deepl.component.html',
  styleUrl: './deepl.component.css'
})
export class DeeplComponent {
  async request() {
    const textToTranslate =
      '["Hello, world!", "Hi, I cannot join today because I go to the doctor. I will be at the office at 11.", "Condition"]';
    const targetLanguage = 'DE'; // Language code for German, change it according to your desired target language

    const apiUrl = `${API_URL}?auth_key=${API_KEY}&text=${encodeURIComponent(
      textToTranslate
    )}&target_lang=${targetLanguage}`;

    fetch(apiUrl, {
      method: 'POST',
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.translations[0].text);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

