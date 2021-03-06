import React from 'react'
import Header from '../header'
import styles from './index.module.css'

import Footer from '../footer'
import Aside from '../aside'

const PageLayout = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div>
        <Aside />
        <div className={styles['inner-container']}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
