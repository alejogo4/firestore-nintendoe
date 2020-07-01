import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCNw1MJcz2QpR7zR0l9gDHUB1NNWcaqGN0",
    authDomain: "nintendo-eshop-2b074.firebaseapp.com",
    databaseURL: "https://nintendo-eshop-2b074.firebaseio.com",
    projectId: "nintendo-eshop-2b074",
    storageBucket: "nintendo-eshop-2b074.appspot.com",
    messagingSenderId: "288805026676",
    appId: "1:288805026676:web:51146e7b6bdeba7aa08a21"
};

firebase.initializeApp(config);

const db = firebase.firestore().settings(settings);

export default{ 
    db, 
    firebase 
};
