import React from "react";
import styles from "./index.module.css";
import Avatar from "../avatar";
import Link from '../link'
import SocialFollow from "../social-follow";

const Aside = () => {

  return (
    <aside className={styles.aside}>
      <Avatar />
      <h2 className={styles.asking}>______ Follow me ______</h2>
      <div className={styles.container}>
        <SocialFollow />
        <h2 className={styles.asking}>_____________</h2>
      </div>
      <div className={styles.intro}>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>

    </aside>
  )
};
export default Aside;



