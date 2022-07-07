import React ,{useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { getContactDetail } from '../redux/action/contacts.action';

import PopUpD from './PopUpD';

const View = ({user}) => {
  const emplyeeData = useSelector((state)=> state.singleEmplyee.singleDetails)
  const userId = user.id;
  const dispatch = useDispatch()
    const [isOpenD, setIsOpenD] = useState(false);
    const togglePopupD = () => {
        setIsOpenD(!isOpenD);
      }
      const handleDelete =()=>{
        let id = userId;
        dispatch(getContactDetail(id))
      }
  return (
    <div>
        <input className="btn ms-2 btn-success"
      type="button"
      value="View"
      onClick={togglePopupD}/>
    {isOpenD && <PopUpD
      contentDelete={<>
      <div className='mb-3 row'>
        <h2>Employee Detail</h2>
        <br/>
        <br/>
        <div>
          <h4> ID :<span>{emplyeeData.id}</span></h4>
          <br/>
          <h4> Name :<span>{emplyeeData.employee_name}</span></h4>
          <br/>
          <h4> Age :<span>{emplyeeData.employee_age}</span></h4>
          <br/>
          <h4> Salary :<span>{emplyeeData.employee_salary}</span></h4>
          <br/>
        </div>
        <br/>
        <button className='btn btn-secondary'  onClick={handleDelete} >Fetch Data</button>
        </div>
      </>}
      handleChange={togglePopupD}
    />}
    </div>
  )
}

export default View;