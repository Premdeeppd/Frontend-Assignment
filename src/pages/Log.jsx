import React from 'react';
import LogComponent from '../components/LogComponent';

const Log = () => {
    return (
        <div className='m-4 bg-cyan-100' style={{ height: '80vh', overflowY: 'auto' }}>
            <LogComponent />
        </div>
    );
}

export default Log;