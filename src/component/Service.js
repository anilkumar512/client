import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Service extends Component {
  render() {
    return (
      <div>
        <div className='service'>
          
        <h1>Services Provided by Us</h1>
       <p class="p3">At our site we provide information about <span className='bmi'>Body Mass Index</span> using your weight and height We give suggestion by using your BMI suggest You to buy the products that will help you.
         Body Mass Index (BMI) is widely used as an indicator of body fat content </p>
         <hr></hr>
         <h3>Check your BMI <NavLink to={'/bmicalculator'}>here</NavLink></h3>
        <div className='benifits'>
        <section>
        
        <h4>Benifits of using our BMI Calculator</h4>
        
        <ul>
          <li>BMI helps measure the obesity rate in people. </li>
          <li>Evaluate the obesity levels in people over time.</li>
          <li>Doctors can mitigate the health risks arising due to obesity</li>
          
        </ul>
        </section>
        <section>
        <img src={require('./cal.jpg')}  className='cal'/>
        </section>
        </div>
        <hr></hr>
        <div className='exp'>
        <h1>Explore</h1>
        <h4><marquee>Overweight</marquee></h4>
        <img src={require('./over.png')}  className='cal'/>
        <p>If you are under the category of Overweight,you can use the prescribed products mentioned
        <NavLink to='/Product'><strong> here</strong></NavLink></p>
        <hr></hr>
        <h4><marquee>Underweight</marquee></h4>
        <img src={require('./under.avif')}  className='cal'/>
        <p>If you are under the category of Underweight,you can use the prescribed products mentioned
        <NavLink to='/Product'><strong> here</strong></NavLink></p>
        <hr></hr>
        </div>

        
        
        </div>




      </div>
    )
  }
}

export default Service