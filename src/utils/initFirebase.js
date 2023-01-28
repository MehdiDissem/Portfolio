import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
	apiKey: "AIzaSyA05fVHSqrQW08aW81v77i8eC6U0TU4E88",
	authDomain: "mypp-2369a.firebaseapp.com",
	databaseURL: "https://mypp-2369a-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "mypp-2369a",
	storageBucket: "mypp-2369a.appspot.com",
	messagingSenderId: "410505824221",
	appId: "1:410505824221:web:ca9180442a32f25fe49834"
};

const initFirebase = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}
};

initFirebase();

export { firebase };
