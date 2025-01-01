import React from 'react';
import aboutimage from '../images/about.png';
import qrImage from '../images/qr.png'; // Replace with your QR code path

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt='About us' />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Prime Force Advisory is recognized as one of the most trusted financial firms by traders. Specializing in Equity and Commodity trading, we have proudly served over 1,000+ satisfied clients with a proven track record of more than 5 years in the stock market. Our experienced advisors provide expert tips in Nifty & Bank Nifty F&O, Stock Cash, Futures, and Options trading, ensuring our clients have the insights they need to achieve their financial goals.
        </p>
        <a href="#contact" className="header-btn">
          <button>READ MORE</button>
        </a>
      </div>
      <div className='payment-card'>
        <div className='payment-header'>Payment card</div>
        <div className='payment-content'>
          <h3>Scan QR Code</h3>
          <img src={qrImage} alt='QR Code for Payment' />
        </div>
      </div>
    </div>
  );
}

export default About;
