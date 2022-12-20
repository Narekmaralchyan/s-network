import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {initializeApp } from "firebase/app";
import { getDatabase, ref, onValue , set } from "firebase/database";

const index = {
    apiKey: "AIzaSyA-JgZBc2ddF-01ffX8S8hv_i1gTk_u7Ps",
    authDomain: "test-775c8.firebaseapp.com",
    projectId: "test-775c8",
    storageBucket: "test-775c8.appspot.com",
    messagingSenderId: "390060171017",
    appId: "1:390060171017:web:e7967e7f8c2dacc81cbdd8"
};
const app = initializeApp(index);

const db = getDatabase();
const starCountRef = ref(db, 'users/');  //starCountRef -y en pathna vorin menq zapros enq uxarkum,,aysinqn karanq


function FirebaseRealTimeData() {
    console.log('rerender')
    const [state,setState] = useState('')
    const [inputValue,setInputValue] = useState(state)
    const [mode,setMode] = useState('idle')

    useEffect(()=>{
        if(mode === 'idle'){
            return onValue(starCountRef, (snapshot) => { // onValue- veradarcnum e mi hat funckia vory kanchelov unsubscribe enq linum live-ic ,,
                setState(snapshot.val().idnarekmaralchyan.about.name) //dra hamar miangamic return em anum ,,karanq verevy kanchenq u heto et funcian return anenq tarberutyun chka
            })
        }
    },[mode])

    function handleChane(e:ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value)
    }
    function changeSourceValue(){
        set(ref(db, 'users/idnarekmaralchyan'), { //setov avelacnum em kam poxum,,
            about:{
                name:inputValue
            }
        }).then(()=>{
            setMode('idle')
            setState(inputValue)
        })

    }
    function edit(){
        setMode('edit')
    }

    if(mode === 'idle'){
        return <div>
            {state}
            <button onClick={edit}>change</button>
        </div>
    }
    else {
        return <div>
            <input value={inputValue}  onChange={handleChane} />
            <button onClick={changeSourceValue} >SAVE</button>
        </div>
    }

}

export default FirebaseRealTimeData;
