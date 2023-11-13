import React, { useState } from 'react'
import { actionCreators, useAppDispatch, useAppSelector } from './Redux';

export const Repositoriess: React.FC = () =>{
   const [input, setInput] = useState('');
   const dispatch = useAppDispatch;
   const { data, error, loading } = useAppSelector(state => state.reducers.repositories);

  const onSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault(); 
 dispatch();
}

    return <div>
    <form onSubmit={onSubmit}>
    <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
    <button type='submit'>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {
        loading && <h3>loading...</h3>
    }
    {
        !error && !loading && data && data.map((name:string)=> <li>{name}</li>)
    }
    </div>
} 

export default Repositoriess;