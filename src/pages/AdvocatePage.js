import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const AdvocatePage = () => {
  const params = useParams()
  const username = params.username

  const [advocate, setAdvocate] = useState([null])

  useEffect(() => {
    getData()
  }, [username])


  let getData = async () => {
    let response = await axios.get(`http://localhost:8000/advocates/${username}`)
    console.log('RESPONSE:', response)
    setAdvocate(response.data)
  }

  return (
    <>
      {advocate &&(
        <div>
          <h1>{advocate.username}</h1>
          <p>{advocate.bio}</p>
        </div>

      )}

    </>
  )
}

export default AdvocatePage