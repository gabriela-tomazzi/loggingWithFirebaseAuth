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
let db = firebase.firestore();
let auth = firebase.auth();

//----------------- Creating --------------------------------------------------

let newUserEmail = 'novoteste@teste.com';
let newUserPassword = '123456';

// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)	promisse
//     .then(user=> {
//         console.log(user)
//     }).catch(err=> {
//         console.log(err)
//     });

function criarUsuario(email, senha) {

	auth.createUserWithEmailAndPassword(email, senha)
    .then(user=> {
        console.log(user)
    }).catch(err=> {
        console.log(err)
    });
}

//----------------- Managing logins -------------------------------------------

let user = auth.currentUser;		//*logged user
//console.log(user);				//*null

function login() {
	let userEmail = 'novoteste@teste.com';
	let userPassword = '123456';

	auth.signInWithEmailAndPassword(userEmail, userPassword)
		.then(loggedUser=> {
			//console.log(loggedUser);			//*will log user
			//console.log(auth.currentUser);	//*will log user with login info
		}).catch(err=> {
			console.log(err);
		});
}
// login();

//console.log(auth.currentUser); //* if line 54 is commented, returns null
auth.onAuthStateChanged(user=> {		//?callback that verifies state of login
	if(user) {
		//console.log(user);			//* same return as line 49
	}else {
		//console.log('no user logged in');		//! if logout() is executed, this will run, the login state changed, and the if makes it log this line
	}
})

function logout() {
	auth.signOut().then(()=> {		//* then() doesn't return anything here
		console.log('logged out');
	}).catch(err=> {
		console.log(err);
	})
}