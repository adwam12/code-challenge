import React, { useState, useEffect } from 'react'
import './styles.css'
import { useDispatch } from 'react-redux';
import APIUtil from '../../utils/API'
const defaultData = require("../data/sample.json");


const Card = (props) => {
  const [isOpen, setCardOpen] = useState(true)
  const [state, toggleState] = useState(false)
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };



  return <section className={isActive ? 'container_closed' : 'container_opened' }>

    <section> {isActive ?  
    <h4>
      [{props.elem.loan_number}]: {props.elem.first_name} {props.elem.last_name} | {props.elem.state}
      <br></br>
      <button className="togglable" onClick={handleToggle}>Show More</button>
      </h4>: <section>    
        <h4>
      [{props.elem.loan_number}]: {props.elem.first_name} {props.elem.last_name} | {props.elem.state}
    </h4> <div>
      <b>Address:</b> {props.elem.address},  {props.elem.city}, {props.elem.state}, {props.elem.zip}
    </div>
    <br></br>
      <div >
      <b>Email:</b> {props.elem.email}
      </div>

      <button className="togglable" onClick={handleToggle}>Show Less</button>
    </section>} </section>

    

  </section>

}

const FullTable = () => {
  const [tableData, fetchTableData] = useState(defaultData)
  const [query, setQuery] = useState("")
  const [idQuery, setIdQuery] = useState("")


  useEffect(() => {
    if (query !== '') {

      const getLoans = async () => {
        try {
          if (query !== '') {
            const { data } = await APIUtil.getLoans(query)

            fetchTableData(data.result)
          }
        }
        catch (err) {
          console.log("Error: ", err)
        }
      }
      getLoans()
    } else {
      fetchTableData(defaultData)
    }
  }, [query])

  useEffect(() => {
    //CLEAN
    if (idQuery !== '') {
      const getLoansByID = async () => {
        try {
          const { data } = await APIUtil.getLoansByID(idQuery)

          fetchTableData(data.result)
        }
        catch (err) {
          console.log("Error: ", err)
        }
      }
      getLoansByID()
    } else {
      console.log("ERROR: Id query is empty")
    }
  }, [idQuery])
 
  return (
    <section>

        <section className="searchArea">
        <input className="searchBox"
          type="text"
          placeholder="Search by attribute"
          onChange={(e) => setQuery(e.target.value)} />

      <input
      className="searchBox"
        type="text"
        placeholder="Search by Loan Number"
        onChange={(e) => setIdQuery(e.target.value)} />

      </section>

      <section className='cardList'>
        {tableData.map((elem, index) => <Card elem={elem} key={index}></Card>)}

      </section>
    </section>

  )

}


export default FullTable;