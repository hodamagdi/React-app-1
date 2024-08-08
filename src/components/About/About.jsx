import React from 'react';
import { Helmet } from 'react-helmet';
import { Star } from '../Star/Star';

export default function About({ navbarHeight }) {
  return (
    <div style={{ paddingTop: navbarHeight }}>
      <div className="flex justify-center items-center text-white bg-[#1ABC9C] ">
        <div className='py-48'>
          <Star text={"About component"} color={"white"} />
          <Helmet>
            <title>About</title>
          </Helmet>
          <div className="container mx-auto w-3/4 flex flex-col justify-center items-center gap-6 md:flex-row">
            <div className="">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
