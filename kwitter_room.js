
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDjSB1E8YZtJ7LkeBCKCyIrQrrAlYTaBDw",
      authDomain: "kwitter-2a3c4.firebaseapp.com",
      databaseURL:"https://kwitter-2a3c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a3c4",
      storageBucket: "kwitter-2a3c4.appspot.com",
      messagingSenderId: "757171440885",
      appId: "1:757171440885:web:5b640b66f3d843b9a049bc"
    };
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +" </div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";


      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location ="kwitter_page.html";
      }

      function logout()
 {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}