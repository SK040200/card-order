import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Link} from 'react-router-dom'
import './order.scss'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Actions/cartActions';

export default function OrderDetail() {


    
    const dispatch = useDispatch()

    const cart1 = useSelector((state) => {
        return state.count.cart
    })
    console.log(cart1)
 
     const handlediscount=()=>{
     let discount=0
     cart1.forEach(element => {
        if(element.original_price){
            discount += (element.original_price - element.final_price)  * element.value
        }
           })
           return discount
    }

    const handleTotal=()=>{
        let total=0
        cart1.forEach(element=>{
            total+=element.final_price * element.value
        })
        return total
    }
    const returnHeader = () => {
        return (
            <div className='Header' >
                <div className='H1' >S.NO </div>
                <div className='H2'>ITEMS </div>
                <div className='H3'>QTY </div>
            </div>
        )
    }
    const HandleOrder = () => {
        return (
            <div className='data'>
                {
                    cart1.map((ele, index) => {
                        return (
                            <div className='tablerow'>
                                <p  className='p1'>{index}</p>
                                <p className='p2'>{ele.name}</p>
                                <div className='btn-group'> 
                                <button className="increment-decrement" onClick={() => {
                                    dispatch(decrement(ele.id))
                                }}>-</button>
         
                                <p className='p3'>{ele.value}</p>

                                <button className="increment-decrement" onClick={() => {
                                   dispatch(increment(ele.id))
                                }}>+</button>
                                </div>
                               
                            </div>
                        )
                    })
                    
                }
                <div className='footer'>
                <div className='Border1'>
                 </div>
                 { cart1.length >0 &&
 <div >
 <Link to='/card-page' className='a' >
 + Add more items
      </Link>
</div>
                 }
                
                </div>
                </div>
        )
    }
    
   const handlePrice=()=>{
    return(
        <div>
           <div>
           <p className='pricedetails'>Price Details</p>
         </div>
        <div className='Border2'>
                  </div>
        <div>
           <div className='price'>

            {
                cart1.map(ele=>{
                    return (
                        <div className='pricerow'>
                        <p className='p4'>{ele.value}</p>
                        <p className='p5'>X</p>
                        <p className='p6'>{ele.final_price}</p>
                        <p className='p7'>{ele.value * ele.final_price}</p>
                       </div>
                    )
                })
            }
             </div>
             </div>
            <div className='Border3'>
            </div>  
            <div className='summary'>
                <p className='p8'> Total savings </p>
                <p className='p9'> {handlediscount()}</p>
                </div>
                <div className='Delivery'>
                    <p className='p10'>Deliver Fee</p>
                    <p className='p11'>5</p>
                </div>
                <div className='Taxes'>
                   <p className='p12'> Taxes and charges </p>
                   <p className='p13'>2</p>
                </div>
                <div className='Border3'></div>
                <div className='total'>
                    <p className='p14'>To Pay</p>
                    <p className='p15'>{handleTotal()}</p>
                </div>
                <div>
                <button type="button" class="placebutton">PLACE ORDER</button>
                </div>
                </div>
       
       
        
    )
   }
   

    return (
        <div className='MainTable'>
            <div className='backtohome'>
             <Link to='/card-page' className='a'>  back to home </Link>
            </div>
            <div >
              <p className='ordersummary'>Order Summary ({cart1.length} items)</p>
            </div>
            <div className='main-table'>
                <div className='table1'>
                   {returnHeader()}
                    <div className='Border'>
                    </div>
                    {HandleOrder()}
                  </div>
                  <div className='table2'>
                  {handlePrice()}
               </div>
                </div>
            </div>

    )

    }

