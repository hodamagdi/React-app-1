import React from 'react';
import { Helmet } from 'react-helmet';


export default function NotFound({ navbarHeight }) {
  return (
    <>
      <div style={{ paddingTop: navbarHeight }}>
        <Helmet>
          <title>NotFound</title>
        </Helmet>
        <div className='flex justify-center items-center h-screen flex-col'>
          <h1 className='text-9xl text-[#1ABC9C] mb-4'>404</h1>
          <p className='text-7xl text-[#1ABC9C]'>page Not Found</p>
        </div>
      </div>
    </>
  )
}
