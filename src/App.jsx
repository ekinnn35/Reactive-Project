import { useState } from 'react'
import './index.css';
import Header from './components/header';
import CardSection from './components/section1';
import ClassesSection from './components/section2';
import  BmiCalculator from './components/section3';
import Trainers from './components/section4';
import Purchases from './components/section5';
import Review from './components/section6';
import Contact from './components/section7';
import Footer from './components/footer';


function App() {
  return (
    <>
      <Header />
      <CardSection />
      <ClassesSection />
      <BmiCalculator />
      <Trainers />
      <Purchases />
      <Review />
      <Contact />
      <Footer />
    </>
      
  )
}

export default App