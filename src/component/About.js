import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div className='about'>
        <div >
               <img src={require('./aboutus.png')} className='aboutimg'/>
               
           </div>
           <br></br>
        <h2 className='abouth2'>A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned.</h2>
      <br></br><br></br><br></br>
      <br></br><br></br>
          
      <div class="container">
        <div class="item">
            <div><h3 className='abouth3'>About BMI</h3></div>
            <h5 align="center">BODY MASS INDEX</h5>
            <p class="p2">It is widely used as a general indicator of whether a person has a healthy body weight for their height.<br></br> Specifically, the value obtained from the calculation of Bmi is used to categorize whether a person is underweight,normal weight, over-weight..</p>
        </div>
        <div class=" item">
            <h3 className='abouth3'>Services</h3>
            <h5 align="center">NUTRITION TIPS</h5>
            <p class="p2">Yes! there will be some dieting, fasting and exercising.Oh yeah and some incredible weight loss...<br></br>We pride ourselves on being the most friendly and sensivitive bunch of people who have got 400,00+ kgs off this planet</p>        </div>
        <div class=" item">
           <h3 className='abouth3'>Products</h3>
            <h5 align="center">Make Sales and Manage Orders</h5>
            <p class="p2"> Ekart logistics or Ekart courier is an Indian courier delivery service company, located in Bangalore, Karnataka.</p>
            <p class="p2">Our Products are Oats, Sprouts , Whole Grains like farro,millet,barley,brown rice, Almonds, Fresh fruits</p>
        </div>
      </div>
   <br></br><br></br><br></br><br></br>

        <div class='aboutdiv'>
        
          <h1 className='abouth1'>Our Team</h1>
          <p className='aboutp'>No matter which product you choose, you can count on <br></br>
          support and help you get the most out of our software</p>
        <div className='aboutdiv2'>
        <div class="itemabout">

        <img src={require('./12.jpg')}className='aimg'/>
        <h5>Anil Kumar</h5>
        <p>Intern</p>
        <p>9392564922</p>
        <p>anilkumar9120255@gmail.com</p>
        <img  src={require('./github.png') } width={20} height={40} />
        <img  src={require('./linkedin.png') } width={20} height={40}/>
          <br></br>
        
        </div>
        <div class="itemabout">

        <img src={require('./49.jpg')}className='aimg'/>
        <h5>Bhargavi</h5>
        <p>Intern</p>
        <p>9392378088</p>
        <p>bhargavivemireddy3@gmail.com</p>
        <img  src={require('./github.png') } width={20} height={40} />
        <img  src={require('./linkedin.png') } width={20} height={40}/>
          <br></br>
        
        </div>
        {/*</div><div className='aboutdiv2'>*/}
        <div class="itemabout">

        <img src={require('./4.jpg')}className='aimg'/>
        <h5>Shaik Afifa</h5>
        <p>Intern</p>
        <p>9010744786</p>
        <p>shaikafifa89@gmail.com</p>
        
        <img  src={require('./github.png') } width={20} height={40} />
        <img  src={require('./linkedin.png') } width={20} height={40}/>
          <br></br>
        
        </div>
        {/*<div className='aboutdiv2'>*/}
        <div class="itemabout">

        <img src={require('./A1.jpg')}className='aimg'/>
        <h5>Harathi</h5>
        <p>Intern</p>
        <p>9390434774</p>
        <p>aarthi93904@gmail.com</p>
        <img  src={require('./github.png') } width={20} height={40} />
        <img  src={require('./linkedin.png') } width={20} height={40}/>
        
          <br></br>
        
        </div>
        {/*<div className='aboutdiv2'>*/}
        <div class="itemabout">

        <img src={require('./51.jpg')} className='aimg'/>
        <h5>Hari</h5>
        <p>Intern</p>
        <p>8074222614</p>
        <p>harimallepogu@gmail.com</p>
        <img  src={require('./github.png') } width={20} height={40} />
        <img  src={require('./linkedin.png') } width={20} height={40}/>
          <br></br>
        
        </div>
        </div>
    </div>
      </div>
    )
  }
}

export default About