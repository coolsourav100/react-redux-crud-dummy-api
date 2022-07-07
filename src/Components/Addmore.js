import React ,{ useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import PopupA from './PopUpA';
import shortid from 'shortid';
import { addEmplyee } from '../redux/action/contacts.action';

const Addmore = () => {
  const dispatch = useDispatch();
  const [isOpenA, setIsOpen] = useState(false);
  const[ namee , setNamee] =useState('');
  const[ agee , setAgee] =useState('');
  const[ salaryy , setSalaryy] =useState('');
  
    const togglePopupA = () => {
        setIsOpen(!isOpenA);
      }
      // const handleChange = (e)=>{
      //   setInputData({
      //     ...inputData , [e.target.name]:e.target.value
      //   })
      //   // refClose.current.click()
      // }
      // const refClose = useRef()

      const handleClick = async()=>{
        let finalData ={
          id:shortid.generate(),
          employee_name: namee,
          employee_age: agee,
          employee_salary: salaryy
        }
        dispatch(addEmplyee(finalData))
        console.log(finalData)
      togglePopupA()
      }
  return (
    <div>
         <input className="btn btn-primary"
      type="button"
      value="Add More"
      onClick={togglePopupA}/>
    {isOpenA && <PopupA
      contentAdd={<>
        <b>Add Employee Details</b>
        <br/>
        <label>Name</label>
        <br/>
        <input type='text'  className='form-control'  onChange={(e)=>setNamee(e.target.value)}/>
        <br/>
        <label>Age</label>
        <br/>
        <input type='number' className='form-control'  onChange={(e)=>setAgee(e.target.value)}/>
        <br/>
        <label>Salary</label>
        <br/>
        <input type='number' className='form-control' onChange={(e)=>setSalaryy(e.target.value)}/>
        <br/>
        <button className='btn btn-secondary'  onClick={handleClick} >Add</button>
      </>}
      handleAdd={togglePopupA }
    />}
    </div>
    
  )
}


export default Addmore
