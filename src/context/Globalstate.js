import { useState } from 'react';
import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//Initial state
const initialState = {
    transactions: [
    {id:1, description:"Income 1",transactionAmount: 1000},
    {id:2, description: "Salaries 1",transactionAmount: -500},
    {id:3, description: "Income 2",transactionAmount: 2000},
    {id:4, description: "Salaries 2",transactionAmount: -100}
    ]
}

//Create the Global Context
export const GlobalContext = createContext(initialState);

//Create a Provider for the Global context
export const GlobalProvider = ({children}) =>  {

    const [state,dispatch] = useReducer (AppReducer,initialState);
           
    
        return (
        <GlobalContext.Provider value = {{
        transactions: state.transactions
    }}> 
        { children }
    </GlobalContext.Provider>
        )
}
