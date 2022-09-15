import React from 'react'

const Banners = () => {
  return (
      <section className="relative bg-white">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?cs=srgb&dl=pexels-elijah-o%27donnell-4066041.jpg&fm=jpg"
          alt="Couple on a bed with a dog"
      />

    <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white  sm:to-transparent"></div>
    <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Let us find your
          <strong className="font-extrabold text-rose-700 sm:block">
            25% Descuento
          </strong>
        </h1>

        <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>

        <div className="flex flex-wrap mt-8 text-center gap-4">
          <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
            Ver Mas
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banners