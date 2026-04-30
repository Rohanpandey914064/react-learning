import {createStore} from 'redex';
import { todoreducer } from './reducer';

export const store= createStore(todoreducer);