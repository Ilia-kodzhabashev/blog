import React from 'react'
import styles from './index.module.css'
import image from '../../images/roma.JPG'
const Avatar = () => {
    return (
        <React.Fragment>
            <img className={styles.image} src={image} />
        </React.Fragment>

    )
}
export default Avatar