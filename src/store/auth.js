import firebase from 'firebase/app';
import { register } from 'register-service-worker';

export default {
    actions: {
        async login({dispatch}, {email, password, name}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                const uid = await dispatch('geUid');
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name
                })
            } catch (error) {
                throw(error)
            }
        },
        async register({}, {email, password}){
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
            } catch (error) {
                throw(error)
            }
        },
        getUid(){
            const user = firebase.auth().currentUser;
            return user ? user : null;
        },
        async logout() {
            await firebase.auth().signOut();
        }
    }
}