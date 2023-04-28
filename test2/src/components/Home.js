import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios"

const Home = () => {
    


    const [adData, setAdData] = useState([]) 
    const handleChange = (e) =>{
        console.log("value", e.target.value)
        axios.get(`http://localhost:8080/ads/${e.target.value.trim()}`)
        .then((res)=>{
            console.log(res.data)
            setAdData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className={styles.body}>
      <p className={styles.comment}>
        Enter Company name, Primary Text, headline, description to see ad
      </p>
      <div className={styles.inputContainer}>
      <input id="input" onChange={(e)=>{handleChange(e)}} />
      </div>
      <div className={styles.adContainer}>
        {adData.map((item, index)=>{
            return (
          <div key={item._id} className={styles.adCard}>
          <a href={item.company.url}>
            <div className={styles.imageContainer}>
              <img src={item.imageURL} />
              <span className={styles.CTA}>{item.CTA}</span>
            </div>
            </a>
            <div className={styles.textContainer}>
              <h3>{item.company.name}</h3>
              <p>{item.headline}</p>
            </div>
          </div>
      )
    })}
    </div>
    </div>
  );
};

export default Home;
