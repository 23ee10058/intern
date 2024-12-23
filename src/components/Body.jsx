import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";
import pic1 from "./photos/pic1.webp";
import pic2 from "./photos/pic2.webp";
import pic3 from "./photos/pic3.webp";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import axios from 'axios'
function Body() {
  const photos = [pic1, pic2, pic3];
  const [index, setIndex] = useState(0);
  const fashion_data = [
    {
      id: 1,
      link: "https://ambraee.com/cdn/shop/files/Project_20240921_0367.jpg?v=1728124318&width=540",
      about: "STRIPE ROYAL BLUE SUIT SET",
      price: "Rs. 5,749.00",
    },
    {
      id: 2,
      link: "https://ambraee.com/cdn/shop/files/Project_20240922_0224.jpg?v=1728126506&width=540",
      about: "PEACHY BLOOOM COTTON SUIT SET",
      price: "Rs. 6,249.00",
    },
    {
      id: 3,
      link: "https://ambraee.com/cdn/shop/files/Project_20240921_0433.jpg?v=1728126920&width=540",
      about: "MAUVE MIRAGE CO-ORD SET",
      price: "Rs. 4,999.00",
    },
    {
      id: 4,
      link: "https://ambraee.com/cdn/shop/files/Project_20240921_0253.jpg?v=1728126845&width=540",
      about: "MULTICOLOUR FLORAL CHINON SAREE",
      price: "Rs. 4,999.00",
    },
    {
      id: 5,
      link: "https://ambraee.com/cdn/shop/files/Project_20240921_0253.jpg?v=1728126845&width=540",
      about: "PURPLE OMBRE KURTA SET",
      price: "Rs. 4,249.00",
    },
    {
      id: 6,
      link: "https://ambraee.com/cdn/shop/files/Project_20240922_0004.jpg?v=1728124871&width=540",
      about: "SHIMMER ORANGE SHARARA SUIT SET",
      price: "Rs. 5,249.00",
    },
    {
      id: 7,
      link: "https://ambraee.com/cdn/shop/files/Project_20240922_0252.jpg?v=1728124942&width=540",
      about: "SCARLET RED RUFFLE SAREE",
      price: "Rs. 4,999.00",
    },
    {
      id: 8,
      link: "https://ambraee.com/cdn/shop/files/Project_20240921_0421.jpg?v=1728127239&width=540",
      about: "GREEN SHIMMER SHARARA SET",
      price: "Rs. 4,999.00",
    },
  ];
  const fashion_data_hover = [
    {
      id: 1,
      link: "https://ambraee.com/cdn/shop/files/Project_20240921_0365.jpg?v=1728124318&width=900",
      about: "STRIPE ROYAL BLUE SUIT SET",
      price: "Rs. 5,749.00",
    },
    {
      id: 2,
      link: "	https://ambraee.com/cdn/shop/files/Project_20240922_0227.jpg?v=1728126506&width=900",
      about: "PEACHY BLOOOM COTTON SUIT SET",
      price: "Rs. 6,249.00",
    },
    {
      id: 3,
      link: "	https://ambraee.com/cdn/shop/files/Project_20240921_0432.jpg?v=1728126920&width=900",
      about: "MAUVE MIRAGE CO-ORD SET",
      price: "Rs. 4,999.00",
    },
    {
      id: 4,
      link: "https://ambraee.com/cdn/shop/files/Project_20240921_0258.jpg?v=1728126845&width=540",
      about: "MULTICOLOUR FLORAL CHINON SAREE",
      price: "Rs. 4,999.00",
    },
    {
      id: 5,
      link: "https://ambraee.com/cdn/shop/files/Project_20240921_0420.jpg?v=1728127239&width=900",
      about: "PURPLE OMBRE KURTA SET",
      price: "Rs. 4,249.00",
    },
    {
      id: 6,
      link: "https://ambraee.com/cdn/shop/files/Project_20240922_0255.jpg?v=1728124942&width=900",
      about: "SHIMMER ORANGE SHARARA SUIT SET",
      price: "Rs. 5,249.00",
    },
    {
      id: 7,
      link: "https://ambraee.com/cdn/shop/files/Project_20240922_0095.jpg?v=1728126360&width=540",
      about: "SCARLET RED RUFFLE SAREE",
      price: "Rs. 4,999.00",
    },
    {
      id: 8,
      link: "	https://ambraee.com/cdn/shop/files/Project_20240922_0003.jpg?v=1728124871&width=540",
      about: "GREEN SHIMMER SHARARA SET",
      price: "Rs. 4,999.00",
    },
  ];

  const category_data = [
    {
      category:'Suit',
      link: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_SUIT_SETS_copy_3e4742f9-b97a-4505-baa8-8bab8b2ecf27.jpg?v=1732105370",
    },
    {
      category:'Kurta',
      link: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_KURTA_SETS_copy_35619cde-dc40-4726-a960-f8356311eefd.jpg?v=1732105370",
    },
    {
      category:'Lehenga',
      link: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_LEHENGAS_copy_fef2bd22-4f5e-4d9a-a37c-f7ae70805355.jpg?v=1732105370",
    },
    {
      category:'Sarees',
      link: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_SAREES_copy_111600df-1c76-4bf1-b371-69a79ad4be99.jpg?v=1732105370",
    },
    {
      category:'co-ord',
      link: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_CORDS_copy.jpg?v=1732105370",
    },
    {
      category:'Dresses',
      link: "https://ambraee.com/cdn/shop/files/jpeg-optimizer_DRESSES_copy_194290c3-8d2a-4e4f-9c12-7c4971e0d30b.jpg?v=1732105370",
    },
   
  ];
  const category_fashion = [
    {
      id: 1,
      link: "https://ambraee.com/cdn/shop/files/BOR04817.webp?v=1693461553&width=900",
      about: "STRIPE ROYAL BLUE SUIT SET",
      price: "Rs. 5,749.00",
    },
    {
      id: 2,
      link: "https://ambraee.com/cdn/shop/files/Project_20210630_0004.webp?v=1712829984&width=900",
      about: "PEACHY BLOOOM COTTON SUIT SET",
      price: "Rs. 6,249.00",
    },
    {
      id: 3,
      link: "https://ambraee.com/cdn/shop/products/23_cd7e10a6-3a69-4d80-9ae3-c80ff9e8aae4.jpg?v=1691223906&width=540",
      about: "MAUVE MIRAGE CO-ORD SET",
      price: "Rs. 4,999.00",
    },
    {
      id: 4,
      link: "https://ambraee.com/cdn/shop/files/Project_20240413_0039.jpg?v=1714049266&width=900",
      about: "MULTICOLOUR FLORAL CHINON SAREE",
      price: "Rs. 4,999.00",
    },
    {
      id: 5,
      link: "https://ambraee.com/cdn/shop/files/BOR04602.webp?v=1694065863&width=540",
      about: "PURPLE OMBRE KURTA SET",
      price: "Rs. 4,249.00",
    },
    {
      id: 6,
      link: "https://ambraee.com/cdn/shop/products/Project_20220112_0006.jpg?v=1691228704&width=900",
      about: "SHIMMER ORANGE SHARARA SUIT SET",
      price: "Rs. 5,249.00",
    },
    {
      id: 7,
      link: "https://ambraee.com/cdn/shop/products/101.jpg?v=1691224343&width=900",
      about: "SCARLET RED RUFFLE SAREE",
      price: "Rs. 4,999.00",
    },
    {
      id: 8,
      link: "https://ambraee.com/cdn/shop/products/Project_20220112_0006.jpg?v=1691228704&width=900",
      about: "GREEN SHIMMER SHARARA SET",
      price: "Rs. 4,999.00",
    },
  ];
  const category_fashion_hover = [
    {
      id: 1,
      link: "https://ambraee.com/cdn/shop/files/BOR04825.webp?v=1693461553&width=540",
      about: "BLUSH & BLOSSOM-TRAIL KURTA SET",
      price: "Rs. 2,374.50.00",
    },
    {
      id: 2,
      link: "https://ambraee.com/cdn/shop/files/Project_20210630_0001.webp?v=1712829983&width=540",
      about: "INDIGO ROSE TIER JUMPSUIT",
      price: "Rs. 2,874.00",
    },
    {
      id: 3,
      link: "https://ambraee.com/cdn/shop/products/24_82c7ca40-c633-4db3-8de6-8cfb8a0b9b96.jpg?v=1691223906&width=540",
      about: "MARSHA MAXI DRESS",
      price: "Rs. 1,899.60",
    },
    {
      id: 4,
      link: "https://ambraee.com/cdn/shop/files/Project_20240413_0038.jpg?v=1714049266&width=540",
      about: "BROWN BASIC KURTA SET",
      price: "Rs. 1,999.60",
    },
    {
      id: 5,
      link: "https://ambraee.com/cdn/shop/files/BOR04606.webp?v=1694065863&width=540",
      about: "SAGE GREEN FLORIAN KURTA SET",
      price: "Rs. 2,499.50",
    },
    {
      id: 6,
      link: "https://ambraee.com/cdn/shop/products/Project_20220112_0007.jpg?v=1691228704&width=540",
      about: "PISTA GREEN JACKET MAXI",
      price: "Rs. 1,999.50",
    },
    {
      id: 7,
      link: "https://ambraee.com/cdn/shop/products/99.jpg?v=1691224343&width=540",
      about: "AUBREE MAXI DRESS",
      price: "Rs. 2,099.60",
    },
    {
      id: 8,
      link: "https://ambraee.com/cdn/shop/files/1_1206d64d-2816-434f-bf78-e7a09d786062.webp?v=1705571584&width=540",
      about: "MIA CO-ORD SET",
      price: "Rs. 2,749.50",
    },
  ];
  const bgImagechange = (e) => {
    // console.log(e._targetInst.key)
  };
  const video = [
    {
      id: 1,
      link: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/whatmore_1080p_41f28288-fe1c-4cd9-9c6c-5a52aa4e582a.mp4?v=1729498313",
    },
    {
      id: 2,
      link: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/whatmore_1080p_26ed857d-0bf7-4a51-af5f-7f3c7fb18d59.mp4?v=1731133128",
    },
    {
      id: 3,
      link: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/whatmore_1080p_2d1937f8-8eb5-412a-bfc7-459f83465189.mp4?v=1731132974",
    },
    {
      id: 4,
      link: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/whatmore_1080p_f380b122-8157-48aa-9ce4-527b049f9a0e.mp4?v=1723270479",
    },
    {
      id: 5,
      link: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/whatmore_1080p_ae7b45d6-3b5f-48f3-9bdd-6e4cf230d834.mp4?v=1721201951",
    },
    {
      id: 6,
      link: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/whatmore_1080p_ff4d76a3-2dd6-4de6-83fd-53bd149c0a3c.mp4?v=1720501577",
    },
  ];
  const [isliked, setisLiked] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [count, setcount] = useState(null);
  const [category,setChooseCategory]=useState("")
  const liked = () => {
    setisLiked(!isliked ? true : false);
  };

  const choose_category=(item)=>{
    setChooseCategory(item.category)
  }
 
  
  
  useEffect(() => {
    // Data to be sent to the backend
    const sendData = {
      category: `${category}`,
      
    };
    
  
    // Axios POST request
    const fetchData = async () => {
      try {
      const res = await axios.post('http://localhost:5000/product/category', sendData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
        console.log(res.data); // Store response in state
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };

    fetchData(); // Call the function to send data
  }, [category])
  return (
    <div className={styles.container}>
      <div className={styles.slides}></div>
      <div className={styles.arrivals}>NEW ARRIVALS</div>
      <div className={styles.box_container}>
        {fashion_data.map((item, index) => (
          <div id={styles.box}>
            <div
              key={item.id}
              className={styles.box}
              onMouseEnter={() => {
                setHoveredItem(item.id);
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
              }}
              style={{
                backgroundImage:
                  hoveredItem === item.id
                    ? `url(${fashion_data_hover[index].link})`
                    : `url(${item.link})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                onClick={() => {
                  setcount(item.id - 1);
                }}
              >
                {count === index ? (
                  <FaHeart color="red"></FaHeart>
                ) : (
                  <IoMdHeartEmpty></IoMdHeartEmpty>
                )}
              </div>
            </div>
            <p>{item.about}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <a href="/product">

        <div className={styles.button}>
          <input type="button" value="View All" />
        </div>
        </a>
      </div>
      <p className={styles.category}>SHOP BY CATEGORY</p>
      <div className={styles.category_container}>
        {category_data.map((item, index) => (
          <div key={index} className={styles.box_cat} onClick={() =>choose_category(item)}>
            <img src={item.link} alt="pic1" />
          </div>
        ))}
      </div>
      <div className={styles.category_slides}></div>
      <div className={styles.box_container_category}>
        {category_fashion.map((item, index) => (
          <div id={styles.box}>
            <div
              key={item.id}
              className={styles.box}
              onMouseEnter={() => {
                setHoveredItem(item.id);
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
              }}
              style={{
                backgroundImage:
                  hoveredItem === item.id
                    ? `url(${category_fashion_hover[index].link})`
                    : `url(${item.link})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                onClick={() => {
                  setcount(item.id - 1);
                }}
              >
                {count === index ? (
                  <FaHeart color="red"></FaHeart>
                ) : (
                  <IoMdHeartEmpty></IoMdHeartEmpty>
                )}
              </div>
            </div>
            <p>{item.about}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <div className={styles.button}>
          <input type="button" value="View All" />
        </div>
      </div>
      <h3>WATCH & SHOP</h3>
      <div className={styles.video_container}>
        {video.map((item, index) => (
          <div key={index} className={styles.box_video}>
            <video src={item.link} loop autoPlay height={400} muted></video>
          </div>
        ))}
      </div>
      <footer>
        <div className={styles.feature}>
          <div>
            <p>
              <img
                src="https://ambraee.com/cdn/shop/files/secure_payments_f77f1e8c-849d-465f-8e62-d52ff69a44c2.png?v=1732105835"
                alt=""
                height={70}
              />
            </p>
            <p>Secure Payment</p>
          </div>
          <div>
            <p>
              <img
                src="https://ambraee.com/cdn/shop/files/COD_47cf4f66-8278-4b91-a0ae-9c812be784a4.png?v=1732105835"
                alt=""
                height={70}
              />
            </p>
            <p>Cash on Delivery</p>
          </div>
          <div>
            <p>
              <img
                src="https://ambraee.com/cdn/shop/files/made_in_india_b311fe9c-4c94-41f0-9b37-084ae9a85e02.png?v=1732105836"
                alt=""
                height={70}
              />
            </p>
            <p>Made In India</p>
          </div>
          <div>
            <p>
              <img
                src="https://ambraee.com/cdn/shop/files/Customer_service_06374375-fe10-439b-806e-50adadb9c0ab.png?v=1732105835"
                alt=""
                height={70}
              />
            </p>
            <p>Prompt Customer Service</p>
          </div>
          <div>
            <p>
              <img
                src="https://ambraee.com/cdn/shop/files/Shipping_worldwide_copy_a9d7a9f6-bf53-49f1-957e-0870f29e90bd.png?v=1732105835"
                alt=""
                height={70}
              />
            </p>
            <p>Shipping Worldwide</p>
          </div>
        </div>
        <h4 style={{padding:'10px',fontFamily:'sans-serif',margin:'20px',fontSize:'20px'}}>UNVEILING YOUR INNER STYLE ICON: SELLOVATION  WHERE TRADITION MEETS MODERNITY</h4>
        <h5 style={{padding:'10px',fontFamily:'sans-serif',margin:'5px',fontSize:'20px'}}>Why Sellovation? It's more than just fashion, it's a feeling</h5>
        <p style={{padding:'10px',fontFamily:'sans-serif',margin:'5px',fontSize:'20px'}}>Embrace the timeless elegance of Indian heritage with a modern twist. Ambraee isn't just another clothing store; it's your gateway to rediscovering the magic of women's ethnic wear reimagined for the contemporary woman. Ambraee clothing has become a leading online destination for women seeking unique and trendy pieces that celebrate their heritage.</p>
        <h5 style={{padding:'10px',fontFamily:'sans-serif',margin:'5px',fontSize:'20px'}}>The Perfect Blend of Tradition and Modernity</h5>
        <p style={{padding:'10px',fontFamily:'sans-serif',margin:'5px',fontSize:'20px'}}>Ambraee stands out as the premier online destination for women's wear, renowned for its exquisite blend of traditional textiles and contemporary designs. Ambraee has revolutionised the way women perceive and purchase ethnic wear. The brand's commitment to quality, innovation, and customer satisfaction has made it a household name as the unique women's clothing online brand.</p>
        <div className={styles.contact}>
          <div>

          <h4 style={{fontSize:'18px',fontPalette:'light',position:'relative',bottom:'30px',left:'70px'}}>Contact us at</h4>
          <p style={{position:'relative',left:'50px',bottom:'10px',color:'black'}}>
            <span >
              <a href="https://www.instagram.com/unstop.world/" target="blank" style={{color:'black'}}><FaInstagram size={25}></FaInstagram></a>
              
            </span>
            <span>
              <a href="https://www.instagram.com/unstop.world/" target="blank" style={{color:'black'}}><FaFacebook size={25}></FaFacebook></a>
              
            </span>
            <span>
              <a href="https://www.instagram.com/unstop.world/" target="blank" style={{color:'black'}}><FaTwitter size={25}></FaTwitter></a>
              
            </span>
            <span style={{position:'relative',bottom:'40px'}}>
              <a href="https://www.instagram.com/unstop.world/" target="blank" style={{color:'black'}}>Sello.official.india@gmail.com</a>
            </span>
          </p>
          </div>
          <div style={{position:'relative',left:'-100px',display:'flex',bottom:'10px'}}>
            <span >Subscribe us to get notification of our latest collections</span>
            <p style={{position:'relative',bottom:'20px'}}><input type="email" placeholder="Enter your email" style={{borderRadius:'10px',fontSize:'19px',fontFamily:'sans-serif',fontWeight:'540',padding:'10px'}}/></p>
            <span><input type="button" value="Subscribe" style={{borderRadius:'10px',font:'17px sans-serif',fontWeight:'500',height:'50px',width:'100px',bottom:'16px',backgroundColor:'#8d605d',color:'white'}}/></span>
          </div>
        </div>
        
        <div className={styles.footer}>
          <div>
            <h2>TOP CATEGORIES</h2>
            <p>Suit Sets</p>
            <p>Kurta Sets</p>
            <p>Dresses</p>
            <p>Co-Ord Sets</p>
            <p>Sarees</p>
            <p>Lehenga</p>
          </div>
          <div>
            <h2>INFORMATION</h2>
            <p>About Us</p>
            <p>Customer Reviews</p>
            <p>Exchange,Cancellation and Refund Policy</p>
            <p>Bulk / Wholesale</p>
            <p>Privacy Policy</p>
            <p>Term of Service</p>
            <p>Size Chart</p>
            <p>Sitemap</p>
          </div>
          <div>
            <h2>GET SUPPORT</h2>
            <p>Contact Us</p>
            <p>Submit for Returns & Exchanges</p>
            <p>Media Query</p>
            <p>Track Your Orders</p>
            <p>Your Addresses</p>
          </div>
          <div>
            <h2>CONNECT WITH US</h2>
            <span><input type="email" placeholder="Enter your email" /><CiMail style={{backgroundColor:'white',fontSize:'38px',height:'52px',position:'relative',bottom:'-21px',left:'-10px',borderRadius:'0 10px 10px 0'}}></CiMail></span>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Body;

// https://cdn.shopify.com/s/files/1/0797/2284/0358/files/whatmore_1080p_41f28288-fe1c-4cd9-9c6c-5a52aa4e582a.mp4?v=1729498313
