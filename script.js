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
let user = auth.currentUser;

let informationsDiv = document.querySelector('.informations');
let lis = document.getElementsByTagName('li');

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
	enviar.textContent = 'Log In';

	enviar.addEventListener('click', logUser);
	cancelar.addEventListener('click', cancel);
}

function logOut() {
	auth.signOut().then(()=> {
		console.log('logged out');
	}).catch(err=> {
		console.log(err);
	})

	lis[0].className = 'displayNone';
	lis[1].className = '';
}

function createUser() {
	let errordiv = document.querySelector('.errormsg');
	let email = document.getElementById('inputEmail').value;
	let senha = document.getElementById('inputSenha').value;

	auth.createUserWithEmailAndPassword(email, senha)
		.then(user=> {
			console.log(`User created`);
			logIn()
		}).catch(err=> {
			errordiv.textContent = err;
		})

}

function logUser() {
	let errordiv = document.querySelector('.errormsg');
	let email = document.getElementById('inputEmail').value;
	let senha = document.getElementById('inputSenha').value;

	auth.signInWithEmailAndPassword(email, senha)
	.then(loggedUser=> {
		console.log('user logged');
	}).catch(err=> {
		errordiv.textContent = err;
	})

	informationsDiv.style.display = 'none';
	lis[0].className = '';
	lis[1].className = 'displayNone';

}

function cancel() {
	let email = document.getElementById('inputEmail');
	let senha = document.getElementById('inputSenha');
	email.value = '';
	senha.value = '';
	informationsDiv.style.display = 'none';
}