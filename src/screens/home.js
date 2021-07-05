import React  from 'react'
import { useEffect, useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import {getdata} from '../store/action'



export default function Home() {
    


    const state =useSelector(state =>state)
    const dispatch = useDispatch()
    

    useEffect(()=>{
       dispatch(getdata())   
    },[])



    return (
        <div>
            <h1>homepage</h1>
            
            <p>userid={state.data.id}</p>
            <p>{state.data.title}</p>
            
           

        </div>
    )
}
