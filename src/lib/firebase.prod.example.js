import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//deleted export for seed <-

// seed the database

// we need config here
const config = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "database-url",
    projectId: "project-id",
    storageBucket: "storage-bucket",
    messagingSenderId: "messaging-sender-id",
    appId: "app-id"
};

const firebase = Firebase.initializeApp(config);

//deleted seedDatabase 


export { firebase };
