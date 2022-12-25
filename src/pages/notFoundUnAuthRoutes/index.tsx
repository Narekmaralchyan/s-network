import React, {FC} from 'react';
import {Link} from 'react-router-dom';
const NotFoundUnAuthRouts: FC = () => {

    return <div>
        <h1>Not found this page</h1>
        <Link to="/registration">Go to log in page</Link>
    </div>;
};



export default NotFoundUnAuthRouts;