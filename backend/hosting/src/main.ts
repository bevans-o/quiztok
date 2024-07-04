import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCYJJkqJ8qYFMI6aeLfh9mcHR8Y9iEbEP0",
  authDomain: "quiztok-123c4.firebaseapp.com",
  databaseURL: "https://quiztok-123c4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiztok-123c4",
  storageBucket: "quiztok-123c4.appspot.com",
  messagingSenderId: "878908069531",
  appId: "1:878908069531:web:6acb14a2dc5642566d183e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeUserData(userId: string, name: string, email: string, imageUrl: string) {
  const db = getDatabase(app);

  // where in database you read and write data
  // ref(db, path)
  const reference = ref(db, 'users/' + userId);
  
  //example of setting data
  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}

writeUserData("andreawu", "awu", "myemail@me.com", "myimageurl");

/* example of getting data

*/
