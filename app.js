// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWhB23It_hJEG6A2Kuk_epEeEsqcrB5xg",
  authDomain: "vjezba-dd588.firebaseapp.com",
  projectId: "vjezba-dd588",
  storageBucket: "vjezba-dd588.appspot.com",
  messagingSenderId: "456461672123",
  appId: "1:456461672123:web:0fc3e5b7b1e52fc201539e",
  measurementId: "G-PK924YWY9Q"
};

// Firebase initialization
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const button = document.querySelector('#save-user');
const thanks = document.querySelector('#thanks');
button.addEventListener('click', (e) => {
  e.preventDefault();
  saveUser();
});

function saveUser() {
  let email = document.querySelector('#email').value;
  let name = document.querySelector('#name').value;
  let address = document.querySelector('#address').value;
  let country = document.querySelector('#country').value;

  thanks.style.display = 'block';

  db.collection("users").add({
  email,
  name,
  country,
  address
})
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.error("error adding document: ", error);
  });
}