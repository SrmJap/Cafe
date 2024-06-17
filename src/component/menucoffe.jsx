export default function menucoffe() {
    return (
        <section className="bg-black w-screen h-screen z-50">
            <div className="menu01 container mx-auto px-10 py-10">
                <div className="mx-auto container menu02 lg:grid grid-cols-2  border-b-2 border-black py-10 border-spacing-10  ">
                    <div className="text-7xl font-bold px-10 border-black border-r decoration-black">
                        <h1 className="text-center">Coffe Menu</h1>
                    </div>
                    <div className=" font-bold px-10 ">
                        <h1 className="text-5xl py-5">Open Hours </h1>
                        <h2 className="text-4xl">08:00 Am - 12:00 Pm</h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 pt-20">

                    <div className=" text-black">
                        <h1 className="px-10 py-5 text-4xl">Main</h1>
                        <div className="font-semibold">
                            <div className="mx-10 py-10 grid grid-col-2  border-black
                             border-b-2 border-dashed">
                                <div>
                                    <h1 className="text-2xl uppercase">Pure Black</h1>
                                    
                                </div>
                                <div>
                                    <h2 className="py-3 text-2xl">7.50 $</h2>
                                </div>

                            </div>
                            <div className="mx-10 py-10   border-b-2 border-dashed">
                                <h1 className="text-2xl uppercase">Etiopia "Sidamo" </h1>
                                <h2 className="py-3">Sidamo, located in the Rift Valley, is one of the regions of Ethiopia best known for coffee production. Here, coffee grows at high altitudes - from 1,550 to 2,200S</h2>
                                <h2 className="py-3 text-2xl">9.90 $</h2>
                            </div>
                            <div className="mx-10 py-10   border-b-2 border-dashed">
                                <h1 className="text-2xl uppercase">Brasil "Robusta"</h1>
                                <h2 className="py-3">Robusta coffee (Coffea Canephora), popular for the Conilon variety, tends to be more bitter and bold.</h2>
                                <h2 className="py-3 text-2xl">5.20 $</h2>
                            </div>
                            <div className="mx-10 py-10   border-b-2 border-dashed">
                                <h1 className="text-2xl uppercase">Venezuela Pure black</h1>
                                <h2 className="py-3">The first coffee tree known in the country was planted by Spanish missions settled in the Caroní River basin in 1730.</h2>
                                <h2 className="py-3 text-2xl">6.50 $</h2>
                            </div>
                        </div>

                    </div>
                    <div className="bg-black text-white">
                        <h1 className="px-10 py-5 text-4xl">Recomended</h1>
                        <div className="">
                            <div className="mx-10 py-10   border-b-2 border-dashed">
                                <h1 className="text-2xl uppercase">Colombia intense premiun</h1>
                                <h2 className="py-3">Denomination is given to 100% Arabica coffee (coffea arabica) produced in the coffee-growing regions of Colombia</h2>
                                <h2 className="py-3 text-2xl">7.50 $</h2>
                            </div>
                            <div className="mx-10 py-10   border-b-2 border-dashed">
                                <h1 className="text-2xl uppercase">Etiopia "Sidamo" </h1>
                                <h2 className="py-3">Sidamo, located in the Rift Valley, is one of the regions of Ethiopia best known for coffee production. Here, coffee grows at high altitudes - from 1,550 to 2,200S</h2>
                                <h2 className="py-3 text-2xl">9.90 $</h2>
                            </div>
                            <div className="mx-10 py-10   border-b-2 border-dashed">
                                <h1 className="text-2xl uppercase">Brasil "Robusta"</h1>
                                <h2 className="py-3">Robusta coffee (Coffea Canephora), popular for the Conilon variety, tends to be more bitter and bold.</h2>
                                <h2 className="py-3 text-2xl">5.20 $</h2>
                            </div>
                            <div className="mx-10 py-10  pb-5  border-b-2 border-dashed">
                                <h1 className="text-2xl uppercase">Venezuela Pure black</h1>
                                <h2 className="py-3">The first coffee tree known in the country was planted by Spanish missions settled in the Caroní River basin in 1730.</h2>
                                <h2 className="py-3 text-2xl">4.50 $</h2>
                            </div>
                        </div>

                    </div>
                </div>

            </div>




        </section>
    )
}