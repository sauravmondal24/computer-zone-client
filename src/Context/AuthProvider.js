import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleProviderLogIn = (provider) => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const updateUser = (userInfo) => {
		setLoading(true);
		return updateProfile(auth.user, userInfo);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const authInfo = {
		user,
		createUser,
		logIn,
		googleProviderLogIn,
		updateUser,
		logOut,
		loading
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
