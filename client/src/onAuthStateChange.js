import { onAuthStateChanged } from "@firebase/auth";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user);
    } else {
        // User is signed out
        console.log('User is signed out');
    }
});
