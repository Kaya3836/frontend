import { useEffect, useState, useRef } from "react";
import styles from "../styles/Main.module.css";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/Firebase";

export const Main = (props) => {

  const [data, setData] = useState(null);
  const [userid, setUseriD] = useState(null);
  const name = useRef(null);
  const [play, setPlay ] = useState(null);
  const [id,setId]=useState(null)

  //User uid
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUseriD(user.uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);
  // Playlist get
  useEffect(() => {
    axios
      .get("http://localhost:8885/playlists")
      .then((response) => {
        const songs = response.data;
        setData(songs);
        setId(songs._id)
      })
      .catch((err) => console.log(err));
  }, [play]);

// CREATE PLAYLIST

  const createPlaylist = () => {
    if (!userid) return;
    axios
      .post("http://localhost:8885/playlists", {
        name: name.current.value,
        creator: userid,
      })
      .then(function (response) {
        setPlay(play+1)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

// DELETE PLAYLIST

  const deletePlaylist = (props) => {
    axios
    .delete(`http://localhost:8885/playlist/${props._id}`)
    .then(function () {
      setPlay(play-1)
    })
    
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
    <div className={styles.container}>
      <div>
        <input id="name" ref={name} />
        <button onClick={createPlaylist}></button>
      </div>
      <div style={{ border: "red" }}>
        {data &&
          data.map((item) => {
            return <> 
            <div>
              <p>{item.name}</p>
              <button onClick={()=>{deletePlaylist(item)}}></button>
              </div>
            </>;
          })}
      </div>
    </div>
  );
};
