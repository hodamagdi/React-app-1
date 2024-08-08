import React from 'react'

export default function Footer() {
    return (
        <>
        <div className='text-center text-white bg-[#2c3e50] p-10 '>
            <div className="container w-full  mx-auto">
                <div className="grid md:grid-cols-3 sm:grid-cols-1 m-6">
                    <div className="span-col-1 p-4 flex justify-center items-center flex-col gap-3">
                        <h3 className="font-semibold text-3xl ">LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="span-col-1 p-4 flex justify-center items-center flex-col gap-3">
                    <h3 className="font-semibold text-3xl ">AROUND THE WEB</h3>
                        <div className="flex gap-3 justify-center text-xl mt-3">

                            <i className="fa-brands fa-facebook border border-white border-solid rounded-full p-2 cursor-pointer hover:bg-white hover:text-[#2C3E50] "></i>
                            <i className="fa-brands fa-twitter border border-white border-solid rounded-full p-2 cursor-pointer hover:bg-white hover:text-[#2C3E50] "></i>
                            <i className="fa-brands fa-linkedin-in border border-white border-solid rounded-full p-2 cursor-pointer hover:bg-white hover:text-[#2C3E50] "></i>
                            <i className="fa-solid fa-globe border border-white border-solid rounded-full p-2 cursor-pointer hover:bg-white hover:text-[#2C3E50] "></i>

                        </div>
                    </div>
                    <div className="span-col-1 p-4 flex justify-center items-center flex-col gap-3">
                    <h3 className="font-semibold text-3xl m-3">ABOUT FREELANCER</h3>
                        <p>
                            Freelance is a free to use, licensed Bootstrap theme created by
                            Route
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-white bg-[#1A252F] text-center p-4">
        <p className="p-2 mb-2">Copyright © Your Website 2021</p>
      </div>
        </>
    )
}
