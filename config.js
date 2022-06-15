import firebase from 'firebase';

 var firebaseConfig = {
       apiKey: "AIzaSyDg_EMA8lvVRPzRyQG2BitHxJflC0FJycg",
    authDomain: "introverts-31ef1.firebaseapp.com",
    projectId: "introverts-31ef1",
    storageBucket: "introverts-31ef1.appspot.com",
    messagingSenderId: "921739072250",
    appId: "1:921739072250:web:9bc00bc668d6e61c786f43"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();