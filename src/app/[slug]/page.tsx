import Link from 'next/link';
import React from 'react'


const getdataFromAPI2 = async (param: any) => {
    const getdata = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param}`);
    const result = await getdata.json();
    return (result.meals);

}

async function page({ params }: { params: { slug: string } }) {
    var [dat] = await getdataFromAPI2(params.slug)
    var datyt = dat.strYoutube
    var datytt = datyt.substring(datyt.indexOf("=") + 1);
    var datyttf = "https://www.youtube.com/embed/" + datytt;
    return (

        < div className="bg-gray-100 min-h-screen" >
            {/* food title & Home Button */}
            <div className="bg-white py-10" >
                <div className="container mx-auto px-4">
                    <Link href={`/`}>
                        <button className='ml-auto flex-shrink-0 bg-gray-800 hover:bg-gray-900 border-gray-800 hover:border-gray-900 text-md border-4 text-white py-1 px-2 rounded-lg'> Home</button>
                    </Link>
                    <h1 className="text-4xl font-bold text-center text-gray-900">{dat.strMeal}</h1>
                    <p className="text-2xl font-bold text-center text-gray-900">{dat.strCategory}</p>
                    <p className="text-2xl font-bold text-center text-gray-900">From {dat.strArea}</p>
                </div>
            </div >

            {/* Video & image food */}
            <div className="container mx-auto px-4 mt-8 " >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1  ">
                    {/* food image*/}
                    <div>
                        <div className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: `url(${dat.strMealThumb})` }}>
                            <div className='relative h-[350px]'>
                            </div>
                        </div>
                    </div>
                    {/* food Video*/}
                    <div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="relative pb-9/16">
                                <iframe height={350} className="w-full aspect-video" src={datyttf} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Instructions, Bahan-Ingredients*/}
            <div className="container mx-auto px-4 mt-2" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {/* Instructions */}
                    <div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
                            <h2 className="text-xl font-bold mb-2 text-gray-900">Instructions</h2>
                            <p>{dat.strInstructions}</p>
                        </div>
                    </div>

                    {/* Bahan-Ingredients */}
                    <div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
                            <h2 className="text-xl font-bold mb-2 text-gray-900">Ingredients</h2>
                            <ul className="list-disc list-inside">
                                {dat.strIngredient1 && (<li>{dat.strIngredient1 + " " + dat.strMeasure1}</li>)}
                                {dat.strIngredient2 && (<li>{dat.strIngredient2 + " " + dat.strMeasure2}</li>)}
                                {dat.strIngredient3 && (<li>{dat.strIngredient3 + " " + dat.strMeasure3}</li>)}
                                {dat.strIngredient4 && (<li>{dat.strIngredient4 + " " + dat.strMeasure4}</li>)}
                                {dat.strIngredient5 && (<li>{dat.strIngredient5 + " " + dat.strMeasure5}</li>)}
                                {dat.strIngredient6 && (<li>{dat.strIngredient6 + " " + dat.strMeasure6}</li>)}
                                {dat.strIngredient7 && (<li>{dat.strIngredient7 + " " + dat.strMeasure7}</li>)}
                                {dat.strIngredient8 && (<li>{dat.strIngredient8 + " " + dat.strMeasure8}</li>)}
                                {dat.strIngredient9 && (<li>{dat.strIngredient9 + " " + dat.strMeasure9}</li>)}
                                {dat.strIngredient10 && (<li>{dat.strIngredient10 + " " + dat.strMeasure10}</li>)}
                                {dat.strIngredient11 && (<li>{dat.strIngredient11 + " " + dat.strMeasure11}</li>)}
                                {dat.strIngredient12 && (<li>{dat.strIngredient12 + " " + dat.strMeasure12}</li>)}
                                {dat.strIngredient13 && (<li>{dat.strIngredient13 + " " + dat.strMeasure13}</li>)}
                                {dat.strIngredient14 && (<li>{dat.strIngredient14 + " " + dat.strMeasure14}</li>)}
                                {dat.strIngredient15 && (<li>{dat.strIngredient15 + " " + dat.strMeasure15}</li>)}
                                {dat.strIngredient16 && (<li>{dat.strIngredient16 + " " + dat.strMeasure16}</li>)}
                                {dat.strIngredient17 && (<li>{dat.strIngredient17 + " " + dat.strMeasure17}</li>)}
                                {dat.strIngredient18 && (<li>{dat.strIngredient18 + " " + dat.strMeasure18}</li>)}
                                {dat.strIngredient19 && (<li>{dat.strIngredient19 + " " + dat.strMeasure19}</li>)}
                                {dat.strIngredient20 && (<li>{dat.strIngredient20 + " " + dat.strMeasure20}</li>)}

                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            <div className="bg-white py-10 mt-3">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-900">Source</h1>
                    <p className="text-2xl font-bold text-center text-gray-900">{dat.strSource}</p>
                </div>
            </div>
        </div >
    )
}

export default page