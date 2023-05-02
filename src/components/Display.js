import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionFetch, actionReset } from '../redux/action';

export default function Display() {

  let dispatch = useDispatch();

  let fData = useSelector((state)=> state.myReducer);

  let fetchMyProducts = () => {
    let preRes = actionFetch();
    dispatch(preRes);
  }

  let reset = () => {
    let preRes = actionReset();
    dispatch(preRes);

  }

  

  return (
    <>
      <button onClick={fetchMyProducts}>Fetch</button>
      <button onClick={reset}>Reset</button>

      <ul>
        {fData.map((ele)=>{
            return <h1>{ele.id}</h1>
        })}
      </ul>
    </>
  )
}
