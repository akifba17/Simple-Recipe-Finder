import React from 'react'


function page() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Judul Masakan */}
            <div className="bg-white py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-900">Nasi Goreng</h1>
                    <p className="text-2xl font-bold text-center text-gray-900">Category</p>
                    <p className="text-2xl font-bold text-center text-gray-900">Asal Negara</p>
                </div>
            </div>

            {/* Video Masak dan Gambar Masak */}
            <div className="container mx-auto px-4 mt-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1  ">
                    {/* Gambar Masak */}
                    <div>
                        <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe')] rounded-lg overflow-hidden shadow-lg">
                            <div className='relative h-[350px]'>
                                {/* <img className="object-fill" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" alt="Gambar Masakan" /> */}
                            </div>
                        </div>
                    </div>
                    {/* Video Masak */}
                    <div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="relative pb-9/16">
                                <iframe height={350} className="w-full aspect-video" src="https://www.youtube.com/embed/7WTsY9VBD3U" title="Roti sarapan paling enak yang pernah saya buat! Sangat sederhana dan cepat." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instruksi, Bahan-bahan, Lain-lain */}
            <div className="container mx-auto px-4 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {/* Instruksi */}
                    <div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
                            <h2 className="text-xl font-bold mb-2 text-gray-900">Instruksi</h2>
                            <ul className="list-disc list-inside">
                                <li>Langkah 1</li>
                                <li>Langkah 2</li>
                                <li>Langkah 3</li>
                                <li>Langkah 4</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bahan-bahan */}
                    <div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
                            <h2 className="text-xl font-bold mb-2 text-gray-900">Bahan-bahan</h2>
                            <ul className="list-disc list-inside">
                                <li>Bahan 1</li>
                                <li>Bahan 2</li>
                                <li>Bahan 3</li>
                                <li>Bahan 4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-10 mt-3">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-900">Source</h1>
                    <p className="text-2xl font-bold text-center text-gray-900">Category</p>
                </div>
            </div>
        </div>
    )
}

export default page