import React from 'react'
import { useDispatch } from 'react-redux';
import { actionCreators } from '../ReduxState';
import { bindActionCreators } from 'redux';




const Shop = () => {
  const dispatch = useDispatch()
  const action = bindActionCreators(actionCreators, dispatch)
  
  return (
    <>
      <h2 className='container d-flex align-items-center justify-content-center position-relative mt-5'>Deposite / WithDraw Money</h2>
      <div className='container d-flex align-items-center justify-content-center position-relative mt-5 '>
       
        <button className='btn btn-primary ms-4 me-3' onClick={()=>action.withDrawMoney(10)}>-</button>
          Updated balance
        <button className='btn btn-primary ms-3' onClick={()=>action.depositeMoney(10)}>+</button>
       
      </div>
    </>
  )
}


export default Shop;
