import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import UsersTable from './components/UsersTable';

function App() {
  const [data, setData] = useState([{}])
  const [limit, setLimit] = useState(1);

  const fetchData = async () => {
    // fetch
    const response = await axios.get(`/api/users?_limit=${limit}`);
    console.log("fetch")
    setData(response.data)

  }
  useEffect(() => {
    fetchData()
  }, [limit])

  const handlePrev = () => {
    setLimit((prev) => (prev - 1))
  }
  const handleNext = () => {
    setLimit((prev) => (prev + 1))
  }

  return (
    <>
      <h2>UseEffectHook</h2>
      <UsersTable usersData={data} handlePrev={handlePrev} handleNext={handleNext} />
    </>
  )
}

export default App
