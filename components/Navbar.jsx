import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import FaceIcon from '@mui/icons-material/Face';
import Link from "next/Link";
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FaceIcon from '@mui/icons-material/Face';

const Navbar = () => {

  // const navigate = useNavigate();

  // const logoutHandler = () => {       
  //   navigate('/login');
  // };  

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callIcon}>
          <Link href="/">
            <Image src="/img/logo2.png" alt="" width="92" height="77" />
          </Link>          
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/products"><a>Products</a></Link>
          </li>
          <Image src="/img/business_deal.svg" alt="" width="200px" height="89px" />
          <li className={styles.listItem}>
            <Link href="/"><a>Events</a></Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/about"><a>Contact</a></Link>
          </li>          
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href="/login">
            <Button 
              size="medium" 
              style={{color:"black"}}
              startIcon={<FaceIcon />}  
            >Login</Button>
          </Link>
          <Link href="/register">
            <Button 
              size="medium" 
              style={{color:"black"}}
              startIcon={<HowToRegIcon />}  
            >Register</Button>
          </Link>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
          {/* <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link">
                  <Button variant="text" size="large" startIcon={<FaceIcon />}>LOGIN</Button>                  
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link">
                  <Button variant="text" size="large" startIcon={<HowToRegIcon />}>REGISTER</Button>                  
                </Link>
              </li>  
            </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
