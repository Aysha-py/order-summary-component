import React from 'react'
import illustration from '../images/illustration-hero.svg'
import music from"../images/icon-music.svg"

const Summarypage = () => {
  return (
    <div id='summary-component'>
    
    <div className='summary-container'>
        <header>
            <div className='header-img'>
                <img src={illustration} alt=''/>
            </div>
        </header>
       
                
                <div className='summary'>
                    <h1>Order Summary</h1>
                    <p>You can now listen to millions of songs, audiobooks, and
                        podcast on any device aanywhere you like!
                    </p>
                </div>

                <div className='plan'>
                    <div className='icon'>
                        <img src={music} alt=''/>
                    </div>
                    
                    <div className='price'>
                        <h2>Annual Plan</h2>
                        <h3>$59.99/year</h3>
                    </div>
                    <div className='change'>
                        <h4>Change</h4>
                    </div>
                </div>
                <div className='proceed'>
                    <button className='proceedpayment'>Proceed to payment</button>
                </div>
                <div className='proceed'>
                    <button className='cancelPayment'>Cancel Order</button>
                </div>
                <footer>
                    <p class="cp-text">
                        Challenge by frontendmentor.io. <span style={{color:"green"}}>Coded By </span>Aysha Muhammed
                    </p>
                </footer>
      
    </div>
    </div>

  )
}

export default Summarypage