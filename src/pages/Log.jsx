import React from 'react';
import LogComponent from '../components/LogComponent';

const Log = () => {
    return (
        <div className='m-6 p-3 rounded-lg ' style={{ height: '80vh', overflowY: 'auto', backgroundColor: "#090F17" }}>
            <LogComponent />
        </div>
    );
}

export default Log;