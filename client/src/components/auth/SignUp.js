import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, app, analytics } from '../../utils/firebaseConfig';

const SignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User signed up:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing up:', errorCode, errorMessage);
        });
};
export default SignUp;
