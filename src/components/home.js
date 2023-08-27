import React from 'react'
import Operational from '../assets/images/operational-dev.jpg';
import { Layout } from '../layout/layout';

export const Home = () => {
  return (
    <Layout>
      <div className='hero'>
        <img className='img-fluid hv-100' src={Operational} alt='Operational-image' />
      </div>
    </Layout>
  )
}
