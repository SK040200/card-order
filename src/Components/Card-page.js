import React from "react";
import "./Card.css";
import star from '../Externals/star.svg'
import Main from './Main.json'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, increment, decrement } from "../Actions/cartActions";

export default function Card() {
    const dispatch = useDispatch()


    const cart = useSelector((state) => {
        return state.count.cart
    })


    const handleClick = (data) => {
        let arr = { ...data, value: 1 }
        dispatch(addToCart(arr))

    }

    const handleIncrement = (va) => {
        dispatch(increment(va))
    }


    const handlerender = (ele) => {
        const arr = cart.find(e => {
            return e.id === ele
        })
        console.log(arr)
        if (arr) {
            return arr.value
        }
        else {
            return null
        }

    }
    const handlepercentage = (ele) => {
        let arr
        if (ele.original_price) {
            arr = (ele.original_price - ele.final_price) / ele.original_price * 100
        }
        return arr > 1 ? Math.floor(arr) + '% Off' : null
    }

    const handlestar = () => {
        return (
            <div className="Main">
                <p className="popular">Most Popular</p>
                <div className="bluestar">
                    <div className="border-colourblue">
                    </div>
                    <div>
                        <img src={star} alt=':(' className="star" />
                    </div>
                    <div className="border-colourblue">
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {handlestar()}
            <div className="maincard">
                {
                    Main.map(ele => {
                        return (
                            <div>
                                <div className="card-container">
                                    {ele.img_url && (
                                        <img src={ele.img_url} alt=':(' className="card-img" />
                                    )}
                                    <span class="badge  start-70 rounded-pill text-bg-danger ">{handlepercentage(ele)}</span>
                                    <div className="carttitle">
                                        <h1 className="cardname">{ele.name}</h1>
                                        {ele.original_price &&
                                            <p className="originalprice">{ele.original_price}</p>
                                        }

                                        <p className="finalprice">{ele.final_price}</p>
                                    </div>
                                    {ele.description && <p className="card-description">{ele.description}</p>}


                                    <div className="btn-group">

                                        {handlerender(ele.id) ? (
                                            <>
                                                <button className="increment-decrement" onClick={() => {
                                                    dispatch(decrement(ele.id))
                                                }}>-</button>

                                                <p className="value">{handlerender(ele.id)}</p>

                                                <button className="increment-decrement" onClick={() => {
                                                    handleIncrement(ele.id)
                                                }}>+</button>
                                            </>
                                        ) : (
                                            <button key={ele.id} className="Add-to-cart" onClick={() => {
                                                handleClick(ele)
                                            }}>Add to Cart</button>
                                        )
                                        }
                                    </div>
                                </div>
                            </div>

                        )

                    })
                }

            </div>
        </>
    );
};

