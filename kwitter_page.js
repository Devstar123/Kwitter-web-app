//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDjSB1E8YZtJ7LkeBCKCyIrQrrAlYTaBDw",
      authDomain: "kwitter-2a3c4.firebaseapp.com",
      databaseURL: "https://kwitter-2a3c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a3c4",
      storageBucket: "kwitter-2a3c4.appspot.com",
      messagingSenderId: "757171440885",
      appId: "1:757171440885:web:5b640b66f3d843b9a049bc"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>  " +name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class=' btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>+ like: "+ like +"</span></button><hr>";

row= name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
      document.getElementById("msg").value = "";
}


function updateLike()
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getAnimations(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}


function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}