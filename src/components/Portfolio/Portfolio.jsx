import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Star } from "../Star/Star";
import img1 from "../../assets/imgs/poert1.png";
import img2 from "../../assets/imgs/port2.png";
import img3 from "../../assets/imgs/port3.png";
import img4 from "../../assets/imgs/poert4.png";
import img5 from "../../assets/imgs/port5.png";
import img6 from "../../assets/imgs/port6.png";

export default function Portfolio({ navbarHeight }) {
  const allImgs = [img1, img2, img3, img4, img5, img6];

  const [currentIndex, setCurrentIndex] = useState(0);


  const [isOpen, setIsOpen] = useState(false);

  function handelIsOpen(index) {
    setCurrentIndex(index)
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  const ClickOut = (e) => {
    if (e.target.classList.contains("overlay")) {
      closeModal();
    }
  };

  return (
    <>
      <div style={{ paddingTop: navbarHeight }}>
        {/* change page title  */}
        <Helmet>
          <title>Portfolio</title>
        </Helmet>

        <Star text={"portfolio component"} color={"#2C3E50"} />
        
        {/* loop cards  */}
        <div className="container mx-auto w-[87%] my-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {allImgs.map((ele, index) => (
              <div key={index} className="col-span-1 relative rounded-xl overflow-hidden group cursor-pointer" onClick={() => handelIsOpen(index)}>
                <img src={ele} alt="" className="w-full rounded-lg" />
                <div className="rounded-xl absolute bg-[#1ABA9F] w-full inset-0 flex justify-center items-center text-white text-9xl opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            ))}
          </div>



           {/* modal */}
           {isOpen && (
            <div className="overlay bg-sky-950 z-50 bg-opacity-25 fixed inset-0 flex items-center justify-center" onClick={ClickOut}>
              <div className="relative  p-4 rounded-lg w-1/2">
                <img src={allImgs[currentIndex]} alt="" className=" h-auto rounded-lg" />
                <button onClick={closeModal} className="text-2xl text-white px-4 py-2 absolute top-5 right-5 rounded-lg border border-white">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
