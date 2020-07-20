import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyDNp071m0F8CaGEpEacVVowKON2Eu-gSRM",
  authDomain: "my-bq-2k20.firebaseapp.com",
  databaseURL: "https://my-bq-2k20.firebaseio.com",
  projectId: "my-bq-2k20",
  storageBucket: "my-bq-2k20.appspot.com",
  messagingSenderId: "36458204012",
  appId: "1:36458204012:web:569d87174cc9c034040149",
  measurementId: "G-XV2SJ5TWHC"
}

firebase.initializeApp(config)
