import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from './Auth'
 const Bmidb = () => {
  const[list,setList]=useState([])
  const[Name,setName]=useState('')
  const[Gender,setGender]=useState('')
  const[Age,setAge]=useState('')
  const[Height,setHeight]=useState('')
  const[Weight,setWeight]=useState('')
  const [popupBool,setPopupBool]=useState(false)
  const [formData,setFormData]=useState({
    Name:'',
    Gender:'',
    Age:'',
    Height:'',
    Weight:'',
    id:'',
    BMI:''
   
  });
  const auth=useAuth()
  useEffect(()=>{
    axios.get('http://localhost:3000/bmi')
  .then(res=>{setList(res.data)
  console.log(res.data)})
  .catch(err=>{console.log(err)})}
  ,[])
  const filteredData=list.filter(x=>auth.user===x.email)

  
  const deleteData=(id)=>{
    axios.delete(`http://localhost:3000/bmi/${id}`)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    alert('Deleted')
    // window.location.reload()            //Automatically reloads the page
  }

  const  showPopup=(id,Name,Gender,Age,Height,Weight,BMI)=>{
    
      setPopupBool(true);
      setFormData({
      Name,
      Gender,
      Age,
      Height,
      Weight,
      id,
      BMI,
    });
  };

  const updateData=(e)=>{
    const{Name,Gender,Age,Height,Weight,id,BMI}=formData;
    axios.put(`http://localhost:3000/bmi/${id}`,{
      Name,
      Gender,
      Age,
      Height,
      Weight,
      id,
      BMI:Weight/(Height/100 * Height/100).toFixed(2),
    })
    
    .then(res=>{
      console.log(res)
      setPopupBool(false)
      
    })
    .catch(err=>{
      console.log(err)})
    
      e.preventDefault()
  }

  const cancel=(e)=>{
    setPopupBool(false)
     e.preventDefault()
  }

  


  return (
      <div>
        <table className='emp-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Modify</th>
              <th>BMI</th>
            </tr>
          </thead>
          <tbody>
            
            {filteredData.map((x)=>(<>
            <tr key={x._id}>
              <td>{x.Name}</td>
              <td>{x.Gender}</td>
              <td>{x.Age}</td>
              <td>{x.Height}</td>
              <td>{x.Weight}</td>
              <td><button onClick={()=>showPopup(x._id,x.Name,x.Gender,x.Age,x.Height,x.Weight)}>Update</button>
                <button onClick={()=>deleteData(x._id)}>Delete</button></td>
              <td>{x.BMI}</td>
                                       
            </tr>
            </>))}
            
          </tbody>
        </table>

        {popupBool?<>
        <div className='popup'>
          <form className='form-update'>
            <button className='popup-cancel' onClick={cancel}>X</button>
           
            <label>Name</label>
            <input value={formData.Name} onChange={(e)=>setFormData({...formData,Name:e.target.value})}/><br></br>
            <label>Gender</label>
            <input value={formData.Gender}onChange={(e)=>setFormData({...formData,Gender:e.target.value})} /><br></br>
            <label>Age</label>
            <input value={formData.Age} onChange={(e)=>setFormData({...formData,Age:e.target.value})}/><br></br>
           <label>Height</label>
           <input value={formData.Height} onChange={(e)=>setFormData({...formData,Height:e.target.value})}/><br></br>
           <label>Weight</label>
           <input value={formData.Weight} onChange={(e)=>setFormData({...formData,Weight:e.target.value})}/><br></br>
          <button onClick={updateData}>Update</button>
        
          </form>
        </div>
        </>:""}
       
        
       
        <br></br>
        <br></br>
       
        
      </div>
    )
  }
export default Bmidb