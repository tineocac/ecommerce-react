import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPurschasesThunk } from '../store/slices/purschases.slice';


const Purschases = () => {

    const dispacth = useDispatch();

    useEffect( () => {
        dispacth(getPurschasesThunk())
    }, [])

    return (
        <div>
            <h1>This is my Purschases component</h1>
        </div>
    );
};

export default Purschases;