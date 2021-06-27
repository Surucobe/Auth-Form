import React, { useState, useEffect, createContext, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

//Inicializar firebase
firebase.initializeApp({
	apiKey: process.env.REACT_APP_FRB_API_KEY,
	authDomain: process.env.REACT_APP_FRB_DOMAIN,
	projectId: process.env.REACT_APP_FRB_PROJECT,
	storageBucket: process.env.REACT_APP_FRB_BUCKET,
	messagingSenderId: process.env.REACT_APP_FRB_SENDER,
	appID: process.env.REACT_APP_FRB_APP
});

const AuthContext = createContext();

//Hook para que los componentes hijos consigan el objeto auth
//y re renderizen cuando este cambie

export const useAuth = () =>{
	return useContext(AuthContext);
}

//Provider hook que creara el el objeto auth y manejara el state
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authenticated, setAuthenticated] = useState(true)

	const sendSignInLinkToEmail = (email) =>{
		firebase.auth().sendSignInLinkToEmail(email, {})
	}

}