
const firebaseConfig = {
    apiKey: "AIzaSyBbRdQ2tw_AHSXiyHyIcYB7hXl6vRlRLXM",
    authDomain: "input-8046f.firebaseapp.com",
    databaseURL: "https://input-8046f-default-rtdb.firebaseio.com",
    projectId: "input-8046f",
    storageBucket: "input-8046f.appspot.com",
    messagingSenderId: "384801958197",
    appId: "1:384801958197:web:8b114d7598d04ff5e2847c"
};

firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('users/');

var form = document.getElementById('contactForm')
form.addEventListener('submit', submitForm)

//Form submit
function submitForm(e) {
    //Prevent for auto submitting
    e.preventDefault();

    //Get values
    var name = getInputValue('name');
    var surname = getInputValue('surname');

    //Save messages
    saveMessage(name, surname);

    //Show alert
    document.getElementById('fadeOut').style.display = 'block';
    //Hide alert after 3 seconds
    setTimeout(function () {
        document.getElementById('fadeOut').style.display = 'none';
    }, 2000) //2000 miliseconds === 2 seconds

    //Clean out the form
    form.reset();
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, surname) {
    messagesRef.push({
        name: name,
        surname: surname
    });
}
