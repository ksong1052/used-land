import React from 'react'
import styles from '../../styles/Product.module.scss';
import Link from "next/Link";

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.directoryMenu}>
          <div className={styles.menuItem}>
            <Link href="/products/1">
              <div className={styles.content}>                  
                <h1 className={styles.title}>Digital Products</h1>
                <span className={styles.subtitle}>Shop Now</span>                                    
              </div>
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="/products/2">
              <div className={styles.content}>
                  <h1 className={styles.title}>Laptop & Desktop</h1>
                  <span className={styles.subtitle}>Shop Now</span>
              </div>
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="/products/3">
              <div className={styles.content}>
                  <h1 className={styles.title}>Cellphone</h1>
                  <span className={styles.subtitle}>Shop Now</span>
              </div>
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="/products/4">
              <div className={styles.content}>
                  <h1 className={styles.title}>Books</h1>
                  <span className={styles.subtitle}>Shop Now</span>
              </div>
            </Link>
          </div>  
          <div className={styles.menuItem}>
            <Link href="/products/5">
              <div className={styles.content}>
                  <h1 className={styles.title}>Funitures</h1>
                  <span className={styles.subtitle}>Shop Now</span>
              </div>
            </Link>
          </div>                            
      </div>
    </div>
  )
}

export default Product
