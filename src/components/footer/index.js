import React, { Component } from "react";
import styles from "./index.module.css";
import Galery from "../galery";


class Footer extends Component {

  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles['galery-wrapper']}>
          <Galery />
          <Galery />
          <Galery />
          <Galery />
          <Galery />
          <Galery />
          <Galery />
          <Galery />
        </div>
        <p className={styles['post-intro']}>Inspiration</p>
      </footer>
    )
  }
}

export default Footer