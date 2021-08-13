import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    // 서비스별로 변경됨
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
    
}

export default AuthService