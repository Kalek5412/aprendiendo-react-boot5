import React from 'react'
import { Banner } from './Banner';
import { ContentHome } from './ContentHome';
import { Footer } from './Footer';
import { Doctor } from './Doctor';


export const Home = () => {
  return (
    <>
      <Banner/>
      <ContentHome/>
      <Doctor/>
      <Footer/>
    </>
  )
}
