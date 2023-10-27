import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumView() {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const API_URL = "";
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      setAlbumData(resData.results);
    };
    fetchData();
  }, [id]);

  //
}
export default AlbumView;
