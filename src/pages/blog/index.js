import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import image from '../../images/avatar.jpg'

const Blog = () => {
    return (
        <PageLayout>
            <section className={styles.section}>
                <div className={styles['main-container']}>
                    <div className={styles['greeting-wrapper']}>
                        <a>ala bala</a>
                        <a>nica turska</a>
                        <a>panica qncho</a>
                    </div>
                    <div className={styles['intro-wrapper']}>
                        <div className={styles['left-column']}>
                            <img className={styles.image} src={image} />
                        </div>
                        <div className={styles['right-column']}>
                            <img className={styles.image} src={image} />
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default Blog