// import { createStore } from "redux";
// import { todoreducer } from './reducer';

// export const store= createStore(todoreducer);



import {configureStore} from '@reduxjs/toolkit'
import {todoreducer} from './reducer';

export const store=configureStore(
    {
        reducer:
        {
            todo:todoreducer
        }
    }
)