
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { allEmplyee } from './redux/action/contacts.action';
// eslint-disable-next-line 
import 'bootstrap/dist/css/bootstrap.min.css';
import Addmore from './Components/Addmore';
import Edit from './Components/Edit';
import View from './Components/View';

const PER_PAGE = 5;

const DataTable = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()
  const emplyeeData = useSelector((state) => state.emplyeeReducer.details)
  // console.log(emplyeeData)
  const [value, setValue] = useState('');
  const [dataSource, setDataSource] = useState([emplyeeData]);
  // console.log('Main Data Souce', dataSource)
  const [tableFilter, setTableFilter] = useState([]);

  useEffect(() => {
    dispatch(allEmplyee());
  }, [dispatch])

  function handlePageClick({ selected: selectedPage }) {
    // console.log("selectedPage", selectedPage)
    setCurrentPage(selectedPage);
  }

  const filterData = (e) => {
    if (e.target.value !== '') {
      setValue(e.target.value)
      const filter = emplyeeData.filter((item) => item.employee_name.toLowerCase().includes(value))
      setTableFilter([...filter])
      // console.log('filter----------------------------------------', filter)
    } else {
      setValue(e.target.value)
      setDataSource([...dataSource])
    }
  }
  const offset = currentPage * PER_PAGE;
  // console.log('Original Data---->', emplyeeData)
  const pageCount = Math.ceil(emplyeeData.length / PER_PAGE);
  return (
    <div>
      <h1 className='text-muted text-center mt-4'> Employee's DashBoard </h1>
      <Addmore />
      <input type="search" className="form-control rounded mt-3"
        placeholder="Search" aria-label="Search" aria-describedby="search-addon"
        value={value} onChange={filterData} />
      <br />
      <table border='1' className='table'>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {value.length > 0 ? tableFilter.map((item, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{item.employee_name}</td>
              <td>{item.employee_age}</td>
              <td>{item.employee_salary}</td>
              <td>
                <div className='d-flex'>
                  <Edit user={item} />
                  <View user={item} />
                </div>
              </td>
            </tr>
          ))
            :

            emplyeeData.slice(offset, offset + PER_PAGE).map((item) => (
              <tr>
                <th>{item.id}</th>
                <td>{item.employee_name}</td>
                <td>{item.employee_age}</td>
                <td>{item.employee_salary}</td>
                <td>
                  <div className='d-flex'>
                    <Edit user={item} />
                    <View user={item} />
                  </div>
                </td>
              </tr>
            ))

          }
          <ReactPaginate
            // breakLabel="..."
            previousLabel="< previous"
            nextLabel="next >"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            // previousLinkClassName={"pagination__link"}
            // nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link_disabled"}
            activeClassName={"pagination__link_active"}
          // renderOnZeroPageCount={null}
          />

        </tbody>
      </table>
    </div>
  )
}

export default DataTable