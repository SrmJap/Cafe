import coffe from '../assets/img/03.jpg'
import food from '../assets/img/food.jpeg'


export default function menu() {
    return (
        <section className="bg-black">
            <h1 className="text-6xl semibold underline underline-offset-8 decoration-dotted py-10 text-center text-white">
                Menu
            </h1>
            <div className="md:flex px-10 gap-10 py-10 justify-center">
                <div class="py-5 relative flex  flex-col justify-center overflow-hidden bg-gray-50">
                    <div class="absolute inset-0 bg-center dark:bg-black"></div>
                    <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-black opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
                            <img src={coffe} class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center  transition duration-300 group-hover:scale-110" alt="" />
                        </div>
                        <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 class=" text-4xl font-bold text-white shadow-xl underline underline-offset-8 uppercase">Coffe menu</h1>
                            
                        </div>
                    </div>
                </div>
                <div class="py-5 relative flex  flex-col justify-center overflow-hidden ">
                    <div class="absolute inset-0 bg-center dark:bg-black"></div>
                    <div class="group relative m-0 flex  rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-black opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 ">
                            <img src={food} class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                        </div>
                        <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 class="text-4xl font-bold underline underline-offset-8 text-white shadow-xl uppercase ">Bakery / Sanwich</h1>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
