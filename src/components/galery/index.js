import React from 'react'
import styles from './index.module.css'
import image from '../../images/avatar.jpg'
const Galery = () => {
  return (
    <React.Fragment>
      <img className={styles.image} src={image} />
    </React.Fragment>

  )
}
export default Galery