import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCTLzZRUXy99f1ZvVbQNSRXOse2tilNWgE",
    authDomain: "image-de54a.firebaseapp.com",
    databaseURL: "https://image-de54a.firebaseio.com",
    projectId: "image-de54a",
    storageBucket: "image-de54a.appspot.com",
    messagingSenderId: "507110959199",
    appId: "1:507110959199:web:e8318c1b80ca8fc1aa93ea",
};
firebase.initializeApp(firebaseConfig);

export default firebase
