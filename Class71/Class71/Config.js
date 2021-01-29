import * as firebase from 'firebase'

var firebaseConfig = {

  apiKey: "AIzaSyAoIlyVtSkVn_ah6gPEygTx0SiX3ByaZe4",
  authDomain: "story-app-b93ab.firebaseapp.com",
  projectId: "story-app-b93ab",
  storageBucket: "story-app-b93ab.appspot.com",
  messagingSenderId: "25445394959",
  appId: "1:25445394959:web:87aacb0cbb60d19022d17a"
};
    

firebase.initializeApp(firebaseConfig);
export default firebase.database();