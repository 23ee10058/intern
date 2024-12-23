import React from "react";
import styles from "./option.module.css";
import { IoIosArrowDown } from "react-icons/io";
function Option() {
  return (
    <div className={styles.container}>
      <p>
        <a href="https://ambraee.com/collections/new-arrivals" target="blank" style={{color:'black'}}>NEW ARRIVALS</a>
      </p>

      <p>
        <a href="https://ambraee.com/collections/ethnic-wear" target="blank" style={{color:'black'}}>ETHNIC WEAR</a>
        <IoIosArrowDown></IoIosArrowDown>
      </p>
      <p>
        <a href="https://ambraee.com/collections/best-sellers" target="blank" style={{color:'black'}}>BEST SELLERS</a>
        
      </p>
      <p>
        <a href="https://ambraee.com/collections/dresses" style={{color:'black'}}>DRESSES</a>
      </p>
      <p>
        <a href="https://ambraee.com/collections/CO-ORDS & jUMPSUITS" style={{color:'black'}}>CO-ORDS & jUMPSUITS</a>
      </p>
      <p>
        <a href="https://ambraee.com/collections/TOPS & SHIRTS" style={{color:'black'}}>TOPS & SHIRTS</a>
      </p>
      <p>
        <a href="https://ambraee.com/collections/UNDER 1499 STORE" style={{color:'black'}}>UNDER 1499 STORE</a>
      </p>
        
        
    </div>
  );
}

export default Option;
