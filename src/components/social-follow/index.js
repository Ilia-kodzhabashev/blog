import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import styles from './index.module.css'
export default function SocialFollow() {
    return (
        <div className={styles['social-container']}>
            <a
                href="https://www.facebook.com/iliya.kirilov.1"
                className={styles.facebook}
            >
                <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>
            <a
                href="https://www.instagram.com/stories/romanspiration/2375479319501107327/"
                className={styles.instagram}
            >
                <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
            <a
                href="https://www.facebook.com/iliya.kirilov.1"
                className={styles.linkedin}
            >
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
        </div>
    )
}