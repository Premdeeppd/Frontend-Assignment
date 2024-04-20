import React from 'react';
import logo from '../assets/logo.svg';
import DropDowm from './DropDown';
import metrix from '../assets/metrics-gray.png';
import list from '../assets/list.png';

const NavBar = () => {
    return (
        // Your component's JSX code goes here
        <div >
            <nav className="p-4 border-b border-gray-300">
                <div className="flex justify-between items-center">
                    <div className='flex'>
                        <img className='pr-4' src= {logo} alt="logo"/>
                        <ul className="flex items-center">
                        <li><a href="/" className="p-2 flex items-center" style={{color: '#4B5563'}}><img src={metrix} alt="Metrics icon" className="pr-2 h-4"/>Metrics</a></li>
                        <li><a href="/about" className="p-2 flex items-center" style={{color: '#4B5563'}}><img src={list} alt="List icon" className="pr-2 h-3"/>Logs</a></li>
                        </ul>
                    </div>
                    <div>
                        <DropDowm />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
