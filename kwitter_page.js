const firebaseConfig = {
    apiKey: "AIzaSyC_za1Hx5D8j48LPM-NlgkuAkQSYDR4lrk",
    authDomain: "kwitter-project-5a458.firebaseapp.com",
    databaseURL: "https://kwitter-project-5a458-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-5a458",
    storageBucket: "kwitter-project-5a458.appspot.com",
    messagingSenderId: "292061934776",
    appId: "1:292061934776:web:4e91e191c820e72f98b04d",
    measurementId: "G-F74QQTHVNS"
};

firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();