
var firebaseConfig = {
      apiKey: "AIzaSyBGKXgdK0-SCTYEzb6FXgqAGLGz_aY_JNU",
      authDomain: "kwitter-24a12.firebaseapp.com",
      databaseURL: "https://kwitter-24a12-default-rtdb.firebaseio.com",
      projectId: "kwitter-24a12",
      storageBucket: "kwitter-24a12.appspot.com",
      messagingSenderId: "843240914914",
      appId: "1:843240914914:web:8b250eb27ad475628f83bb"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  
  function addUser()
  {
      u1 = document.getElementById("user_name").value;
      firebase.database().ref("/").child(u1).update({
          purpose : "adding user"
      });
  }