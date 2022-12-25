import React, {FC} from 'react';
import {Link} from 'react-router-dom';
const NotFoundAuthRouts: FC = () => {

    return <div>
        <h1>Not found this page</h1>
        <Link to="/feed">Go to feed</Link>
    </div>;
};



export default NotFoundAuthRouts;