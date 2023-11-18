import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
export default function Payment() {
  return (
    <div className='payment'>
        <div className='payment-left'>
            <div className='payment-left-header'>
                <h3>Wallet</h3>
                <span>Hi Harizibam, Welome back!</span>
            </div>
            <div className='payment-left-balance'>
                
                <div className='payment-left-amount'>
                <h2>Your Balance</h2>
                <h1>$ 40,25,600.00</h1>
                <h3>Saving A/C: xxxxxxx1234</h3>
                </div>
                
            </div>
            <div className='payment-left-history'>
            <span className='payment-date'>Today 12-02-2022</span>  
                <div className='payment-left-date'>
                        
                        <div className='payment-left-detail'>
                            <div className='payment-left-box'>
                                <FaPlus />
                            </div>
                            <span>Fuck off Kavinarasu</span>
                            <h2>$1200</h2>
                        </div>
                        <div className='payment-left-detail'>
                            <div className='payment-left-box'>
                            <FaPlus />
                            </div>
                            <span>Fuck off Kavinarasu</span>
                            <h2>$1200</h2>
                        </div>
                        <div className='payment-left-detail'>
                            <div className='payment-left-box'>
                            <FaPlus />
                            </div>
                            <span>Fuck off Kavinarasu</span>
                            <h2>$1200</h2>
                        </div>
                        <div className='payment-left-detail'>
                            <div className='payment-left-box'>
                            <FaPlus />
                            </div>
                            <span>Fuck off Kavinarasu</span>
                            <h2>$1200</h2>
                        </div>
                        <div className='payment-left-detail'>
                            <div className='payment-left-box'>
                            <FaPlus />
                            </div>
                            <span>Fuck off Kavinarasu</span>
                            <h2>$1200</h2>
                        </div>
                        <div className='payment-left-detail'>
                            <div className='payment-left-box'>
                            <FaPlus />
                            </div>
                            <span>Fuck off Kavinarasu</span>
                            <h2>$1200</h2>
                        </div>
                        <div className='payment-left-detail'>
                            <div className='payment-left-box'>
                            <FaPlus />
                            </div>
                            <span>Fuck off Kavinarasu</span>
                            <h2>$1200</h2>
                        </div>
                </div>
            </div>
        </div>
        <div className='payment-right'>
                <div className='payment-right-header'>
                    <div className='payment-right-box'>
                        <IoIosNotifications/>
                    </div>
                    <div className='payment-right-box'>
                        <FaSearch/>
                    </div>
                        
                </div>
                <div className='payment-account'>
                        <div className='payment-account-header'>
                            <span>Quick Transfer</span>
                        </div>
                        <div className='payment-account-btn'>
                            <button>Visa Mobile NO.</button>
                            <button>Visa Account NO.</button>
                        </div>
                        <div className='payment-account-input'>
                            <input type='number' placeholder='A/C: xxxxxxx1234'/>
                            <input type='number' placeholder='00,00,000.00'/>
                        </div>
                        <div className='payment-account-send'>
                            <button>Send to </button>
                        </div>
                </div>
                <div className='payment-cart'>
                        <div className='payment-cart-visa'>
                                <span className='visa'><RiVisaLine /></span>
                                <span className='chip'><FcSimCardChip /></span>
                                <h2 className='payment-cart-number'>1223 1233 1234 1234</h2>
                                <div className='cart-details-box'>
                                    <div className='cart-details-inner'>
                                        <label>Owner Name</label>
                                        <span>Harizibam</span>
                                    </div>
                                    <div className='cart-details-inner'>
                                        <label>Expiry</label>
                                        <span>06/07</span>
                                    </div>
                                    <div className='cart-details-inner'>
                                        <label>CVV</label>
                                        <span>262</span>
                                    </div>
                                </div>
                        </div>
                </div>
        </div>
    </div>
  )
}
