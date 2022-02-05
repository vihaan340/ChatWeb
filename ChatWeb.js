 // Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBPmveDCCqZ5n7DHM9SrBCB4_Zm7P9EH8M",
    authDomain: "chatweb-e2d94.firebaseapp.com",
    databaseURL: "https://chatweb-e2d94-default-rtdb.firebaseio.com",
    projectId: "chatweb-e2d94",
    storageBucket: "chatweb-e2d94.appspot.com",
    messagingSenderId: "222866020306",
    appId: "1:222866020306:web:405579e6cf15a37e985a0b"
  };
  
  // Initialize Firebase
  const app = initializeApp(config);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "ChatWeb_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}