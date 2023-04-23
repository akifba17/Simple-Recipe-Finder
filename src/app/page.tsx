'use client';
import { json } from 'node:stream/consumers';
import React, { useEffect, useState } from 'react'

function Page() {
  const [data, setdata] = useState<any[]>([]);
  const [Search, setSearch] = useState("")

  useEffect(() => {
    getdataFromAPI();
    console.log(Search)
  }, [Search])

  //calling data from API
  const getdataFromAPI = async () => {
    const getdata = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`);
    const result = await getdata.json();
    setdata(result.meals);
  }


  return (
    <>
      {/* Jumbotron */}
      <div className="bg-gray-700 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Hello Fellas</h1>
          <p className="text-lg text-white">Find your favorite recepie here !</p>
        </div>
      </div>
      {/* search input*/}
      <div className="container mx-auto mt-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input onChange={(e) => setSearch(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search..."></input>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Search
            </button>
          </div>
        </div>

      </div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap -mx-4 text-center">
          {/* Card recepie */}
          {data ? (data.map((data, i) => (

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={i}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg" >
                <img className="w-full h-48 object-cover object-center" src={data.strMealThumb} alt="Gambar Produk"></img>
                <div className="p-4">
                  <h2 className="text-gray-900 font-bold text-lg mb-2">{data.strMeal} </h2>
                  <p className="text-gray-700 text-base">This dish originated in {data.strArea}</p>
                  <div className="mt-3 flex items-center">
                    <span className="text-gray-900 font-bold text-ml">Category : {data.strCategory}</span>
                    <button className="ml-auto flex-shrink-0 bg-gray-800 hover:bg-gray-900 border-gray-800 hover:border-gray-900 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))) : (
            // card recepie if search = null
            <div className='items-center'>
              <span className="text-gray-900 font-bold text-ml object-center">No Product Found</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Page