import React from 'react'
import { CiSearch } from "react-icons/ci";
import styles from './Navbar.module.css'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import { PiBusLight } from "react-icons/pi";

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.search}>
            <button><CiSearch></CiSearch></button>
            <input type="text" placeholder='Search' />
        </div>
        <p>Mytalorzone By Sahiba</p>
        <div className={styles.user}>
            <span><CiUser size={25}></CiUser></span>
            <span><CiHeart size={25}></CiHeart></span>
            <span><CiShoppingCart size={25}></CiShoppingCart></span>
            <span><PiBusLight size={25}></PiBusLight></span>
        </div>
    </div>
  )
}

export default Navbar