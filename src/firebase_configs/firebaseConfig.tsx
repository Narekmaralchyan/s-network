import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import '@firebase/auth';

const index = {
    apiKey: 'AIzaSyA-JgZBc2ddF-01ffX8S8hv_i1gTk_u7Ps',
    authDomain: 'test-775c8.firebaseapp.com',
    projectId: 'test-775c8',
    storageBucket: 'test-775c8.appspot.com',
    messagingSenderId: '390060171017',
    appId: '1:390060171017:web:e7967e7f8c2dacc81cbdd8'
};

const app = initializeApp(index);

export const db = getDatabase();
export const starCountRef = ref(db, 'users/');
