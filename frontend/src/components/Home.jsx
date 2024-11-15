import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <LatestJobs/>
    </div>
  )
}

export default Home
