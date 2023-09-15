import React, { useState } from 'react';
import OverWeightMaleImage from './overweight.jpg'
import UnderWeightMaleImage from './underweight.jpg'
import NormalWeightMaleImage from './normalweight.jpg'
import OverWeightFemaleImage from './femaleoverweight.jpg'
import NormalWeightFemaleImage from './femalenw.jpg'
import UnderWeightFemaleImage from './femaleunderweight.jpg'
import Bmidb from './Bmidb';
import axios from 'axios';
import {useAuth} from './Auth';



const BMICalculator = () => {


  const auth=useAuth();
  const [Name, setName] = useState('');
  const [Age,setAge] = useState('');
  const [Height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [BMI, setBMI] = useState('');
  const [Gender, setGender] = useState('');
   // eslint-disable-next-line
  const [image,setImage] = useState(null);


  
  const calculateBMI = () => {
    const heightInMeters = Height / 100; 
    const bmiValue = (Weight / (heightInMeters * heightInMeters)).toFixed(2); 
    setBMI(bmiValue);
  };

  
 const changename=(event)=>{
    setName(event.target.value)
}
 const changegender=(event)=>{
    setGender(event.target.value)
}
 const changeage=(event)=>{
    setAge(event.target.value)
}
 const changeemail=(event)=>{
  setEmail(event.target.value)
 }

  
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const heightInMeters = Height / 100; 
    const bmiValue = (Weight / (heightInMeters * heightInMeters)).toFixed(2); 
    setBMI(bmiValue);
    console.log(BMI)
    
    const Gender = document.querySelector('input[name="Gender"]:checked').value;
    const bmiImage = getBMIImage(BMI, Gender);
    setImage(bmiImage); 
   axios.post('http://localhost:3000/bmi',{
      Name:Name,
      Gender:Gender,
      Age:Age,
      Height:Height, 
      Weight:Weight,
      email:email,
      BMI:Weight/(Height/100 * Height/100).toFixed(2),
      email:auth.user
      

      })
     .then(res=>{
       console.log(res)
      //  alert('Data added successfully')
    
      })
    .catch(err=>{console.log(err)})
  //  axios.put(`http://localhost:3000/bmi/${id}`,{
  //     Name:Name,
  //     Gender:Gender,
  //     Age:Age,
  //     Height:Height, 
  //     Weight:Weight,
  //     email:email,
  //     BMI:Weight/(Height/100 * Height/100).toFixed(2),
  //     email:auth.user
      

  //     })
  //    .then(res=>{
  //      console.log(res)
  //      alert('Data updated successfully')
    
  //     })
  //   .catch(err=>{console.log(err)})
    
  
     };
  
 


  
  


  

  const getBMIImage = (BMI, Gender) => {
    if (!BMI) return null;
  
    if (BMI < 18.5) {
      
      return Gender === "male" ? UnderWeightMaleImage : UnderWeightFemaleImage;
    } else if (BMI >= 18.5 && BMI < 24.9) {
      console.log("Normal Weight");
      return Gender === "male" ? NormalWeightMaleImage : NormalWeightFemaleImage;
    } else {
      console.log("over Weight");
      return Gender === "male" ? OverWeightMaleImage : OverWeightFemaleImage;
    }
  };
  
 

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <center>
      <table>
                    <fieldset>
                    <legend>BMI CALCULATOR</legend>
                       <tr>
                        <td>
                         <label>
                            Name:*
                        </label></td>
                       <td> <input type='text' placeholder='Enter Your Full Name' value={Name} onChange={changename} required/>
                        </td>
                        </tr>
                        <hr>
                        </hr>
                        <tr>
                            <td>
                        <label>Gender:</label>
                    </td><td>
                    <input type="radio" name="Gender" value="male" checked={Gender === 'male'} onChange={() => setGender('male')} /> Male
        <input type="radio" name="Gender" value="female" checked={Gender === 'female'} onChange={() => setGender('female')} /> Female
        
                         </td></tr>
                        
                        <tr>
                            <td>
                         <label>Age:</label></td>
                         <td>
                         <input type='text'placeholder='Enter Your Age' onChange={changeage} />
                         </td>
                        </tr>
                      <hr></hr>
                         <tr>
                            <td>
        <label>
          Height (cm):*</label></td>
          <td>
          <input type="number" value={Height} onChange={handleHeightChange} required/>
        </td>
        </tr>
        <tr>
          <td>
        <label>
          Weight (kg):*</label></td>
          <td>
          <input type="number" value={Weight} onChange={handleWeightChange} required />
          </td>
        
        </tr>
        <hr></hr>
       
        <center>
        <button type="submit">Calculate BMI</button>
       
      
      {BMI && <p>Your BMI: {BMI}</p>}
      {BMI  && <img src={getBMIImage(BMI, Gender)} alt="BMI Range" />}
      </center> 
      </fieldset>
        </table>
       </center> 
      </form>
      { <Bmidb/> }
    </div>
  );
  
  }

export default BMICalculator;