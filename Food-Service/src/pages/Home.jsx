import React from 'react'
import TimeandSocials from '../Components/TimeandSocials'
import Navbar from '../Components/Navbar'
import ThirdPage from '../Components/ThirdPage'
import AllProductsList from '../Components/AllProductsList'
import Category from '../Components/Category'
import Choco from '../Components/Choco'
import FreshMeat from '../Components/FreshMeatandFish'
import FreshVegetables from '../Components/FreshVegetables'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <TimeandSocials></TimeandSocials>
    <Navbar></Navbar>
    <ThirdPage></ThirdPage>
    <Category></Category>
    <AllProductsList></AllProductsList>
    <Choco></Choco>
    <FreshMeat></FreshMeat>
    <FreshVegetables></FreshVegetables>
    <Footer></Footer>
    </>
  )
}

export default Home
