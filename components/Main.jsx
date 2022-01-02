import React from 'react'
import styles from '../styles/Main.module.scss';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.directoryMenu}>
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Digital</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Laptop & Desktop</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Cellphone</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Books</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>  
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Funitures</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>                            
            </div>
        </div>
    )
}

export default Main
