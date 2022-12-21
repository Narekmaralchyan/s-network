import {FormEvent} from 'react';
import {createUserWithEmailAndPassword, getAuth} from '@firebase/auth';
import {ref, set} from 'firebase/database';
import {db} from 'firebase_configs/firebaseConfig';

export const setUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth();
    const formData = new FormData(event.currentTarget);

    const formValue = {
        email: formData.get('email'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        password: formData.get('password')
    };

    const regUser = await createUserWithEmailAndPassword(auth, formValue.email as string, formValue.password as string);
    const postUser = await set(ref(db, regUser.user.uid), {
            id: regUser.user.uid,
            name: formValue.firstName,
            lastName: formValue.lastName,
            email: formValue.email,
    });

    return regUser.user.uid;

};