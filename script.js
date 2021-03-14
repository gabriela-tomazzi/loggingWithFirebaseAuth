var firebaseConfig = {
    apiKey: "AIzaSyAIoFllHzcLN_WTsM1MyB6j402-uY-7PbA",
    authDomain: "colegio-79df6.firebaseapp.com",
    databaseURL: "https://colegio-79df6-default-rtdb.firebaseio.com",
    projectId: "colegio-79df6",
    storageBucket: "colegio-79df6.appspot.com",
    messagingSenderId: "307269568797",
    appId: "1:307269568797:web:9c0b0dad16006a13bab9f4",
    measurementId: "G-C06BEV3LL5"
};
firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();

let informationsDiv = document.querySelector('.informations');
let email = document.getElementById('inputEmail').value;
let senha = document.getElementById('inputSenha').value;

let enviar = document.querySelector('#enviarButton');
let cancelar = document.querySelector('#cancelarButton');


function signUp() {
	informationsDiv.style.display = 'block';
	enviar.textContent = 'Sign Up'

	enviar.addEventListener('click', createUser);
	cancelar.addEventListener('click', cancel);
}

function logIn() {
	informationsDiv.style.display = 'block';
	enviar.textContent = 'Log In'

	console.log('Log in executado');
}

function createUser() {

	auth.createUserWithEmailAndPassword(email, senha)
		.then(user=> {
			console.log(`User created`);
		}).catch(err=> {
			console.log(err);
		})

	logIn();
}

function cancel() {
	email.value = '';		//TODO not working why
	senha.value = '';
	informationsDiv.style.display = 'none';
}