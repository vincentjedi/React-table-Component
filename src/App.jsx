import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


//creatin table columns
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
   
  },
  {
    name: 'Age',
    selector: row => row.age,
    sortable: true,
    
  }
]

//table data as an array of objects
const data = [
  {
    id: 1,
    name: "Vincent jedi",
    email: "vincekitipal@gmail.com",
    age: "27"
  },

  {
    id: 2,
    name: "Habel Sanga",
    email: "habelsanga@gmail.com",
    age: "23"
  },

  {
    id: 3,
    name: "Milcah Mbodze",
    email: "milcah@gmail.com",
    age: "16"
  },

  {
    id: 4,
    name: "Allan Mwajedi",
    email: "allanjedi@gmail.com",
    age: "28"
  },

  {
    id: 5,
    name: "Evans Kalu",
    email: "evans@gmail.com",
    age: "7"
  }

]

//declaring state variable to manage the data
const [records, setRecords] = useState(data);

//defining the handleFilter function
function handleFilter(event) {
const newData = data.filter(row => {
  return row.name.toLowerCase().includes(event.target.value.toLowerCase())
})

setRecords(newData);
}

  return (
    <div className='container mt-5'>

<div className='form-group row mb-2'>
<input type="text" onChange={handleFilter} className='form-control' placeholder='search here...'/>
</div>
     
     { /*importing the data from the table */}
      <DataTable
       columns={columns} 
       data={records}
       selectableRows
       fixedHeader
       pagination
      ></DataTable>
    </div>
    
  )
}

export default App
