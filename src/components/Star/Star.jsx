import React from 'react'

export function Star({ text, color }) {
    return (
      <div className="  text-center m-4 " style={{ color }}>
        <div>
          <h2 className="text-3xl xl:text-4xl mt-10 mb-3 leading-10 font-bold uppercase">
            {text}
          </h2>
        </div>
        <div className=" flex justify-center items-center gap-3 p-2">
          <div className=" h-1 w-20" style={{ backgroundColor: color }}>
            {" "}
          </div>
          <i className="fa-solid fa-star text-xl"></i>
          <div className=" h-1 w-20" style={{ backgroundColor: color }}>
            {" "}
          </div>
        </div>
      </div>
    );
  }
