import { useState } from 'react';


export const useCounter = ( initialState ) => {
    
    const [counter, setCounter] = useState(initialState || 10); // Importante 

    const reset = () => {
        setCounter( initialState );
    }

    const increment = () => {
        setCounter( counter + 1);
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}
