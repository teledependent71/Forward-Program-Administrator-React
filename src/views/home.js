import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Program Administrator</title>
        <meta property="og:title" content="Forward Program Administrator" />
      </Helmet>
    </div>
  )
}

export default Home
