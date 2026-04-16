//import { useState } from "react";//no need with reducer


import { useContext, useReducer } from 'react';
//import{ThemeContext,UserContext,LangContext} from './context'
import{GlobalContext} from './context'

//2. create reducer function

function reducer(state,action){
    switch(action.type){
        case "TOGGLE_THEME":
            return{...state,
                theme:state.theme==="light"?"dark":"light",
            }

        case "SET_USER":
            return{
                ...state,
                use:action.payload,
            }

        case "SET_LANG":
            return{
                ...state,
                lang:action.payload,
            }

        default:
            return state;
    }
}
    

export const AppProvider=({children})=>{

//Updated with reducer
    //1.create common state object
    
    const initialState={
        theme:"light",
        user:{name:"rohan"},
        lang:"HINDI"
    }

    // const [theme,setTheme]=useState("light");
    // const [user,setUser]=useState({name:"guest"});
    // const [lang,setLang]=useState("en");

    //3.create single state object
    const [state,dispatch] = useReducer(reducer,initialState);
    


        // const toggleTheme=()=>
        // {
        //     setTheme((theme==="light")?"dark":"light");
        //     console.log("rohan yes")
        // }


    return(
        // <ThemeContext.Provider value={{theme,toggleTheme}}>
        //     <UserContext.Provider value={{user,setUser}}>
        //         <LangContext.Provider value={{lang,setLang}}>
        //             {children}
        //         </LangContext.Provider>
        //     </UserContext.Provider>
        // </ThemeContext.Provider>

        // <ThemeContext.Provider value={{state,dispatch}}>
        //     <UserContext.Provider value={{state,dispatch}}>
        //         <LangContext.Provider value={{state,dispatch}}>
        //             {children}
        //         </LangContext.Provider>
        //     </UserContext.Provider>
        // </ThemeContext.Provider>

        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}