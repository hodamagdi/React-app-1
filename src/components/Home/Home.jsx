import React from 'react'
import Avatar from '../../assets/imgs/avataaars.svg'
import { Helmet } from 'react-helmet';
import { Star } from '../Star/Star';

export default function Home({ navbarHeight }) {

  return (
    <>

      <div style={{ paddingTop: navbarHeight }}>
          <Helmet>
            <title>Home</title>
          </Helmet>

        <div className="flex flex-col justify-center items-center text-center text-white bg-[#1ABC9C] py-20">
          <div>
            <img src={Avatar} alt="Avatar" style={{ width: 250, margin: "auto" }} className='pb-1'/>

            <Star text={"start framework"} color={"white"} />
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>

      </div>

    </>
  )
}
