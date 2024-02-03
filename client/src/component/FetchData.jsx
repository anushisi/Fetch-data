import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = () => {
  const [data , setData] = useState([])
  useEffect(() => { 
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])
  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Fetch Data from API in React </h3>
        <table className='table'>
          <thread>
            <tr>
              <th>
                ID
              </th>
              <th>
                Name
                </th>
              <th>
               Email
              </th>
              <th>
                City
                </th>
            </tr>
          </thread>
          <tbody>
            {
              data.map((user,index) => {
                return <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>

                </tr>
              })
    
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default FetchData
