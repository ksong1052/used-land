import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callIcon}>
          <Image src="/img/logo2.png" alt="" width="92" height="77" />
        </div>
        {/* <div className={styles.texts}>
          <div className={styles.text}>Order</div>
          <div className={styles.text}>012-345-6789</div>
        </div> */}
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <Image src="/img/business_deal.svg" alt="" width="200px" height="89px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact</li>          
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
