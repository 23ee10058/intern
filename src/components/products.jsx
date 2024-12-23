import React, { useEffect, useState } from "react";
import axios from "axios";
function Fashion() {
    const [data,setdata]=useState(null)
   useEffect(() => {
      // Fetch products data when the component is mounted
      const fetchProducts = async () => {
        try {
          const response = await axios.post('http://localhost:5000/get-product');
          setdata(response.json());
           // Store the products in state
        } catch (err) {
          console.log('Error fetching data: ' + err.message); // Display error message if request fails
        }
      };
  
      fetchProducts(); // Call the function to fetch data
    }, []);
  return (

  <div>
       {data.map((item)=>(
           <p>{item}</p>
       ))}
  </div>
  )
}

export default Fashion;
