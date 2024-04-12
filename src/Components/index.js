
import cart from '../Externals/cart.svg'
import profile from '../Externals/profile.svg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './index.scss'
import { useState } from 'react';


export default function Navpage(){
 const [orderDetail,setOrderDetail]=useState(false)
  
 const Nav = useNavigate()
 const cart1 = useSelector((state) => {
    return state.count.cart
})


  const handleOrderDetails=()=>{
    setOrderDetail(!orderDetail)
    Nav('/order-details');

  }
    return(
        <div>
      <nav class="navbar bg-body-light navfixed">
      <div  className='companyText'>
        
      <img src='https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg' alt=":(" width="40" height="40"  className='happayicon'/>
       <p className='Text'>Happay</p>

     
      <div className='carticon'>
      <img src= {cart} alt=":("  width="40" height="40" onClick={handleOrderDetails}/>
      { cart1.length >0 &&
         <span class="position-absolute top-8 start-100 translate-middle badge rounded-pill bg-danger badgenumber">
         {cart1.length}
   
       </span>
      }
      </div>
      <div className='profileicon'>
      <img src= {profile} alt="Bootstrap" width="40" height="40"/>
      </div>
      </div>
      </nav>

        </div>
       
    )
}