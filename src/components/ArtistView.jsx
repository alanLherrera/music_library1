import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ artistData, setArtistData ] = useState([])

  useEffect(() => {
    const API_URL = 'http://localhost:4000/album/${id}'
    const fetchData = async () => {
     const response = await fetch(API_URL)
     const resData = await response.json()
     setArtistData(resData.results)

    }
   fetchData()
    
  }, [id])

  const renderAlbums = artistData.filter(entry => entry.collectionType === 'Album').map((album, i) => {
    return(
      <div key={i}>
        <link to ={`/album/${album.collectionId}`}>
              <p>{album.collectionName}</p>
        </link>
      </div>
    )
  })
  
  const navButtons = () => {
    return(
      <div>
          <button onClick={() => navigate(-1)}>Back</button>
          <span style={{padding: "0 15px"}}>|</span>
          <button onClick={() => navigate ('/')}>Home</button>
      </div>
    )
  }

 }
