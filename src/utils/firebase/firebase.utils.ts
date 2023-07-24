// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	writeBatch,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAE2HqJ9FTxPNzt-CifhFJCkdySoaDlmg4",
	authDomain: "my-clothing-app-db.firebaseapp.com",
	projectId: "my-clothing-app-db",
	storageBucket: "my-clothing-app-db.appspot.com",
	messagingSenderId: "132472709242",
	appId: "1:132472709242:web:f4078bc6dfcadf0add5bc3",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// Add Collections in  Firesbase DB for SHOP PAGE - Use this only to upload new categories to DB directly
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((i) => {
		const docRef = doc(collectionRef, i.title.toLowerCase());
		batch.set(docRef, i);
	});

	await batch.commit();
	console.log("Data Uploading Done!");
};

// Query collection data from DB to application
export const getCategoriesAndDocuments = async (collectionName) => {
	const collectionRef = collection(db, collectionName);
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// Creating new user auth collection with uid from google login
export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			console.log("Error: " + error.message);
		}
	}
	return userDocRef;
};

// User auth for direct email/password login
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

// User signin with username and password
export const userSignInWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

// User signout
export const signOutUser = async () => {
	await signOut(auth);
};

// Auth state change listener
export const onAuthStateChangedListener = (callback) => {
	onAuthStateChanged(auth, callback);
};
