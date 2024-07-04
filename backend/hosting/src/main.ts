import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, update, on } from "firebase/database";


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

const db = getDatabase(app);

function writeUserData(userId: string, name: string, email: string, imageUrl: string) {
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

function writeActivity(activityId: string, activityName: string, options: string, questions: any, questionsNo: number, badges: any, status: boolean) {
  const reference = ref(db, 'activity/' + activityId);

  set(reference, {
    activityName: activityName,
    options: options,
    questionsNo: questionsNo,
    badges: badges,
    status: status
  })
  questions.forEach((element: { index: number; question: string; answer: string; options: any; }) => {
    writeQuestion(activityId, element.index, element.question, element.answer, element.options)
  })

  //maybe no need manually input question n options one by one

  function writeQuestion(id:string, order: number, question: string, answer: string, options: any) {
    const reference = ref(db, 'activity/' + id + 'question/' + order);
  
    update(reference, {
      question: question,
      answer: answer,
    })
  
    options.forEach((element: string) => {
      writeOption(id, order, element)
    })
  
      function writeOption(id: string, order: number, option: string) {
        const reference  = ref(db, 'activity/' + id + 'question/' + order + 'options/');
      
        update(reference, {
          choice: option
        })
      }
  }
  
}

function writeBadge(badgeId: string, name: string, colour: string, conditions: number) {
  const reference = ref(db, 'badges/' + badgeId);

  set(reference, {
    name: name,
    colour: colour,
    conditions: conditions
  })
}

function giveBadge(userId: string, badgeId: string) {
  const reference = ref(db, 'users/' + userId);

  push(reference, badgeId);
}

function getAllActivities() { 
  const reference = ref(db, 'activity');
  var allAct;
  on(reference, 'value', function(snapshot: any) {
    allAct = snapshot.val()
  })
  return allAct
}

function getActivity(activityId: string) {
  const reference = ref(db, 'activity' + activityId);
  var activity;
  on(reference, 'value', function(snapshot: any) {
    activity = snapshot.val()
  })
  return activity
}



writeUserData("andreawu", "awu", "myemail@me.com", "myimageurl");

/* example of getting data

*/
