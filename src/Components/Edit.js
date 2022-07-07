import React ,{ useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Popup from './PopUp';
import { updateEmplyee } from '../redux/action/contacts.action';

const Edit = ({user }) => {
  const {id, employee_name , employee_age ,employee_salary} = user;
  useEffect(() => { setNamee(employee_name)}, [employee_name] )
  useEffect(() => { setAgee(employee_age)}, [employee_age] )
  useEffect(() => { setSalaryy(employee_salary)}, [employee_salary] )
  // console.log(id);
  // console.log(employee_name)
  const userId = user.id;
  // console.log(userId)
  let name1 = user.employee_name
  let age1 = user.employee_age
  let salary1 = user.employee_salary
  // console.log(name1)
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(newUser);
  const[namee ,setNamee] =useState('');
  // console.log(namee)
  const[ agee , setAgee] =useState('');
  const[ salaryy , setSalaryy] =useState('');
  
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    
      const handleClick = async()=>{
        let id = userId;
        console.log('id------>',id)
        let data ={
          employee_name: namee,
          employee_age: agee,
          employee_salary: salaryy,
          id:userId,
        }
        dispatch(updateEmplyee(data,id))
      togglePopup()
      }
  return (
    <div>
         <input className="btn btn-primary"
      type="button"
      value="Edit "
      onClick={togglePopup}/>
    {isOpen && <Popup
      content={<>
        <div className='mb-3 row'>
        <b>Update Employee Detail</b>
        <br/>
        <br/>
        <lable>Id</lable>
        <br/>
        <input type  className='form-control' value={userId}  disabled/>
        <br/>
        <label>Name</label>
        <br/>
        <input type='text'  className='form-control' value={namee}  onChange={(e)=>setNamee(e.target.value)}/>
        <br/>
        <label>Age</label>
        <br/>
        <input type='number' className='form-control' value={agee}  onChange={(e)=>setAgee(e.target.value)}/>
        <br/>
        <label>Salary</label>
        <br/>
        <input type='number' className='form-control' value={salaryy} onChange={(e)=>setSalaryy(e.target.value)}/>
        <br/>
        <br/>
        <button className='btn btn-secondary'  onClick={handleClick} >Update</button>
        </div>
      </>}
      handleClose={togglePopup }
    />}
    </div>
    
  )
}


export default Edit