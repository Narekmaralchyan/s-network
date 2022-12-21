import React, {FC, useEffect, useState} from 'react';
import {UserSDK} from './SDK';

const App: FC = () => {
    const [name,setname] = useState('');
    const user1 = new UserSDK('idnarekmaralchyan');

    useEffect(() => {
        user1.getName().then((name) => {
            setname(name);
        });
    },[name]);
  return (
      <>
        <h1>{name}</h1>
      </>
  );
};

export default App;
