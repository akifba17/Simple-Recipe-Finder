import React from 'react'

export default function index() {
  return (
    <div>
      <div className="bg-gray-700 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Hello Fellas</h1>
          <p className="text-lg text-white">Find your favorite recepie here !</p>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search..."></input>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-48 object-cover object-center" src="https://source.unsplash.com/random" alt="Gambar Produk"></img>
              <div className="p-4">
                <h2 className="text-gray-900 font-bold text-lg mb-2">Nama Produk</h2>
                <p className="text-gray-700 text-base">Deskripsi produk singkat.</p>
                <div className="mt-3 flex items-center">
                  <span className="text-gray-900 font-bold text-lg">Category : </span>
                  <button className="ml-auto flex-shrink-0 bg-gray-800 hover:bg-gray-900 border-gray-800 hover:border-gray-900 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
