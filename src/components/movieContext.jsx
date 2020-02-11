import React, { useState, createContext } from 'react';


export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, movieList] = useState([
        {
            name: 'Harry Potter',
            price: '10$',
            id: '1234'
            
        },
        {
            name: ' Cernobilj ',
            price: '15$',
            id: '456'
        },
        {
            name: 'Mladi papa',
            price: '20$',
            id: '789'
        },
        {
            name: 'Novi papa',
            price: '50$',
            id: '852'
        }
    ]);

    return (
<MovieContext.Provider value = {[ movies, movieList]}>
    {props.children}
</MovieContext.Provider>
    );
}