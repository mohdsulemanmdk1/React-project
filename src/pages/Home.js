import React from 'react'
import { Link } from 'react-router-dom'
import Body from '../components/Body'
import { swiggyUrl } from '../utils/url'
import { useState,useEffect } from 'react'
import useOfficialUrl from '../utils/useOfficialUrl'

const Home = () => {
    let url = useOfficialUrl() // url 



  return (
    <div>
     <Body url={url} />
    </div>
  )
}

export default Home
