import React from 'react'

const test = () => {
  return (
    <div>
          <div className="grid grid-cols-12 gap-4">
      <div className=""></div>
      <div className="col-span-5">
        <div className="text-gray-50 p-4">
          <p className="text-7xl font-semibold p-4 ">01</p>
          <p className="text-3xl font-bold">
           Front EndProject
          </p>
          <p className="py-2 font-thin">
            I'm a software developer with a passion for creating innovative
            solutions. I am proficient in various programing languages and
            tecnologies
          </p>
          <p className='py-2 font-light'>
            HTML, CSS, JAVASCRIPT
          </p>
        </div>
      </div>

      <div className="col-span-5 ">
        <div className="m-4">
          <div className="w-3/4 rounded-md ">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
    </div>
  )
}

export default test