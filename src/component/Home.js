import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate=useNavigate()
  return (
    <div>

                <h2 class="h2"><center>Welcome!</center></h2>
                 <div className='p1'>
                    <div className='p11'><p>Body,Mind,Intellect and Body Mass Index If Perfect,You are ready to conquer the unseen.</p></div>
                    <div className='p12'><img src={require('./bmiimage.jpeg.jpg')} width={400} height={300} /></div>
                 </div>
           <br></br><br></br><br></br><br></br><br></br><br></br>
            
        
        <div class="global">
            
            <div class="item33">
               <img src={require('./A1.jpg')} className='ig'/>
           </div>
           <div class="item4">
               <img src={require('./frame222.jpg')} className='ig'/>
               
           </div>
           <div class="item1">
               <img src={require('./frame223.jpg')} alt="nutrition" className='ig'/>
           </div>
           <div class="item2">
               <img src={require('./A2.jpg')} alt="nutrition2" className='ig'/>
           </div>
           <div class="item55">
               <img src={require('./frame224.jpg')} alt="food" className='ig'/>
           </div>
           <div class="item6">
               <img src={require('./frame225.jpg')} alt="food" className='ig'/>
           </div>
   </div>
   <h3>What we do</h3>
    <p class="p3">At our site we provide information about <span className='bmi'>Body Mass Index</span> using your weight and height We give suggestion by using your BMI suggest You to buy the products that will help you.</p>
    <br></br>
    <br></br>
    <div class="container">
        <div class="item">
            <div><img class="img2" src={require('./calculations.jpg')}/></div>
            <h5 align="center">BODY MASS INDEX</h5>
            <p class="p2">It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of Bmi is used to categorize whether a person is underweight,normal weight, over-weight..</p>
        </div>
        <div class=" item">
            <img class="img2" src={require('./stethoscope.jpg')}/>
            <h5 align="center">NUTRITION TIPS</h5>
            <p class="p2">Yes! there will be some dieting, fasting and exercising. Oh yeah and some incredible weight loss..We pride ourselves on being the most friendly and sensivitive bunch of people who have got 400,00+ kgs off this planet</p>        </div>
        <div class=" item">
            <img class="img2" src={require('./e-commerce.jpg')}/>
            <h5 align="center">Make Sales and Manage Orders</h5>
            <p class="p2"> Ekart logistics or Ekart courier is an Indian courier delivery services company, headquartered in Bangalore, Karnataka.</p>
        </div>
    </div>
      <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>









        <h1>FEEDBACKS</h1>
        <div className='container1'>
        <div className='item'><img src={require('./rating.png' )}width={100} height={100}/>
        <p className='fp'>No matter which product you choose, you can count on our team of experts to provide top-notch support and help you get the most out of our software</p>
        <img src={require('./feed1.png')}className='img'/>
        <p className='fn'>Sita</p>
        </div>
        <div className='item'><img src={require('./rating.png' )}width={100} height={100}/>
        <p className='fp'>No matter which product you choose, you can count on our team of experts to provide top-notch support and help you get the most out of our software</p>
        <img src={require('./feed3.png')}className='img'/>
        <p className='fn'>Tom Robinson</p>
        </div>
        <div className='item'><img src={require('./rating.png' )}width={100} height={100}/>
        <p className='fp'>No matter which product you choose, you can count on our team of experts to provide top-notch support and help you get the most out of our software</p>
        <img src={require('./feed2.png')}className='img'/>
        <p className='fn'>Jenny</p>
        </div>
        </div>
        <div className='container2'>
        <div>
          <h1 className='lt'>BMIWISECART</h1>
          <img src={require('./logo2.png')}width={150} height={100} className='img'/> 
          

          </div>
          <section>
          <h4>Menu</h4>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='/About'>About Us</a></li>
              <li><a href='Product'>Products</a></li>
              <li><a href='/Service'>Services</a></li>
              <li><a href='/About'>Contact</a></li>
            </ul>
          

          </section>
          
          <section>
          <h4>Contact</h4>
          <p>Nerawada, X' Roads,Nandyala,<br></br> Andhra Pradesh 518501<br></br>contactsupport@gmail.com<br></br>9000666090</p>

          

          </section>
        </div><br></br><br></br><br></br><br></br><br></br><br></br>
        <footer>
          <div className='footer'> 
          <h3 className='fcontent'> Copyright © 2023 BMIWISECART App Company | Powered by BMIWISECART App Company</h3>
          <nav className='social'>
          <a href='https://www.twitter.com/'><img  src={require('./twitter.png') } width={20} height={30}/></a>
          <a href='https://www.facebook.com/'><img  src={require('./facebook.png') } width={20} height={30}/></a>
          <a href='https://www.instagram.com/'><img  src={require('./instagram.png') } width={20} height={30}/></a>
          </nav>
        </div>
        </footer>
      </div>
    
  )
}
