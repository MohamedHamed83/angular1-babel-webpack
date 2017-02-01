let firebase = require('firebase/app');

let config = {
  apiKey: "AIzaSyCTtFZ6R8yGR84ViC1sKMqFvm21poZp_sY",
  authDomain: "limitless-b772c.firebaseapp.com",
  databaseURL: "https://limitless-b772c.firebaseio.com",
  storageBucket: "limitless-b772c.appspot.com",
  messagingSenderId: "702010957834"
};
export const FirebaseModule = firebase.initializeApp(config);
export const ref = firebase.database().ref();