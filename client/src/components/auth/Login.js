import { auth, app, analytics } from '../../utils/firebaseConfig';
import { signInWithEmailAndPassword } from "@firebase/auth";

const Login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in:', errorCode, errorMessage);
        });
};

export default Login;
