import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='px-4 py-2 hover:bg-green-400 md:hover:bg-green-400 active:bg-green-500 transition-colors'>
            <a href={route.path}> {route.name}</a>
        </li>
    );
};

export default Link;