// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyBoQUbdUaaaEt8_BoITpbaUwNGB8XGeaRU",
      authDomain: "myapp-ff2ce.firebaseapp.com",
      projectId: "myapp-ff2ce",
      storageBucket: "myapp-ff2ce.firebasestorage.app",
      messagingSenderId: "320683291885",
      appId: "1:320683291885:web:7a4aade75969efff9b08e4"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
