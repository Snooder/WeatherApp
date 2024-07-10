import { signOut } from "firebase/auth";

const SignOut = () => {
    signOut(auth)
        .then(() => {
            console.log('User signed out');
        })
        .catch((error) => {
            console.error('Error signing out:', error);
        });
};

export default SignOut;
