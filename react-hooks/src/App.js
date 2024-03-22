import './App.css';
import Counter from './components/counter';
import DataFetching from './components/DataFetching';
import DataFetchingTwo from './components/DataFetchingTwo';
import HookEffect from './components/HookEffect';
import HookContextA from './components/HookContextA';
import HookReducer from './components/HookReducer';
import HookReducerTwo from './components/HookReducerTwo';
import HookReducerContext from './components/HookReducerContext';
import HookCallback from './components/HookCallback';
import React, {useReducer} from 'react';
import HookMemo from './components/HookMemo';
import HookRef from './components/HookRef';
import HookCustomOne from './components/HookCustomOne';
import HookCustomTwo from './components/HookCustomTwo';
import HookCustomThree from './components/HookCustomThree';
import HookCustomFour from './components/HookCustomFour';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()
const initialState = 0

const reducer = (state, action) => {
  console.log(state);
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <Counter></Counter><br></br>
      <HookEffect></HookEffect><br></br>
      <DataFetching></DataFetching>
      
      <UserContext.Provider value={'abc'}>
        <ChannelContext.Provider value={'def'}>
          <HookContextA></HookContextA>
        </ChannelContext.Provider>
      </UserContext.Provider>

      <br/>
      <br/>
      <HookReducer></HookReducer><br/>
      <HookReducerTwo></HookReducerTwo>

      <br/>
      <CountContext.Provider value={{dispatch: dispatch}}>
        count controlled by childrens {count}
        <HookReducerContext></HookReducerContext>
      </CountContext.Provider>

      <br/>
      <br/>

      <DataFetchingTwo></DataFetchingTwo>

      <br/>
      <br/>


      <HookCallback></HookCallback>

      <br/>
      <br/>
      <HookMemo></HookMemo>

      <br/>
      <br/>
      <HookRef></HookRef>

      <br/>
      <br/>
      <HookCustomOne/>
      <HookCustomTwo/>

      <br/>
      <br/>
      <HookCustomThree/>

      <br/>
      <br/>
      <HookCustomFour/>

    </div>
  );
}

export default App;
