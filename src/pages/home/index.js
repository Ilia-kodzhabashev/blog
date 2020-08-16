import React from 'react'
import styles from './index.module.css'
import Articles from '../../components/articles'
import PageLayout from '../../components/page-layout'
const Home = () => {
  return (
    <PageLayout>
      <Articles />
    </PageLayout>
  );
}

export default Home