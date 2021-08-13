import firebase from 'firebase';
import firebaseApp from './firebase';

//사용법은 firebase manual 참조
class AuthService {
    // 서비스별로 변경됨
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout(){
        firebase.auth().signOut();
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })

    }
    
}


export default AuthService