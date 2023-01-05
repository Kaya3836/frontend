import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/Home.module.css';
import song from "../assets/song.gif";
import png1 from "../assets/png1.png";
import png2 from "../assets/png2.png";
import axios from 'axios';
import { useState } from 'react';

const routes = [
    {name: "Login", to: "login"},
    {name: "Signup", to: "signup"},
]
 
export const Home = () => {

 
  return (
    <>
    <div className={styles.body}>
        <h1 className={styles.text}>MusiX bla bla</h1>
        <div className={styles.route}>
            {routes.map(({ name, to }) => (
                <Link to={to}>
                    {name}
                </Link>
                ))}
            </div>
            <img className={styles.song} src={song}/>
            <img className={styles.png1} src={png1}/>
            <img className={styles.png2} src={png2}/>
    </div>
    </>
  )
}
 
export default Home