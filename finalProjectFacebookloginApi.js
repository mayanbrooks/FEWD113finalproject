// Initialize Firebase
var config = {
  apiKey: "AIzaSyBZZHdVBhRb2E3of_G56fonbhjFmxvkO1U",
  authDomain: "fewd-final-project-revel.firebaseapp.com",
  databaseURL: "https://fewd-final-project-revel.firebaseio.com",
  storageBucket: "fewd-final-project-revel.appspot.com",
  messagingSenderId: "455991904826"
};
firebase.initializeApp(config);
  // Get a reference to the database service
  var database = firebase.database();


  var provider = new firebase.auth.FacebookAuthProvider();

  console.log('2');
  firebase.auth().signInWithPopup(provider).then(function(result) {
    console.log('1');
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
console.log(user);
      // ...
  }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
  });

$('.facebook-modal-button').click(function() {
  // MAKE SURE YOU HAVE THIS:
  //python3 -m http.server 
  checkLoginStatus()
    .then(function(result){
      if (result.user === null) {
        authenticateUser();
      }
    })
    .catch(function(err) {
      alert('failed!')
    });
});


// console.log(isLoginPage)

// checkLoginStatus()
//   .then(function(result){
//     const loginPage = $('.js-login-page');
//     const isLoginPage = loginPage.length > 0;
//     console.log(isLoginPage, result, result.user)
//     if (isLoginPage && result.user !== null) {
//       console.log('LOGIN PAGE, LOGGED IN')
//       window.location.href = '/index.html';
//     }
//     else if (!isLoginPage && result.user === null) {
//       console.log("NOT LOGIN PAGE, LOGGED OUT")
//       window.location.href = '/login.html';
//     }
//     else {
//       console.log("LOGGED IN")
//       console.log(result)
//     }
//   });


// Facebook Authentication log-in
function authenticateUser() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithRedirect(provider);
}
//

function checkLoginStatus() {
    return firebase.auth().getRedirectResult().then(function(result) {
        return result;
    });
}
