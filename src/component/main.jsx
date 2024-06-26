import back from '../assets/img/01.avif'
import banner from '../assets/img/banner 2.webp'

export default function main() {
    return (
        <section className=''>
            
            <img src={back} alt="" className='absolute hidden lg:block lg:h-screen lg:w-full' />


            <header className='h-screen w-screen hidden z-40 lg:flex'>
                
               
                <div className=' bg-black w-80  mx-20 gap-10 text-white relative font-bold uppercase lg:flex lg:flex-col'>
                    <div className='w-84 pt-64 '>
                        <div className='h-20 text-white px-5 pt-4 hover:bg-white duration-700 hover:text-black'>
                            <a href="" className='text-4xl  uppercase text-center'>Home</a>
                        </div>
                        <div className='h-20 text-white px-5 pt-4 hover:bg-white duration-700 hover:text-black'>
                            <a href="" className='text-4xl  uppercase text-center'>About Us</a>
                        </div>
                        <div className='h-20 text-white px-5 pt-4 hover:bg-white duration-700 hover:text-black'>
                            <a href="" className='text-4xl  uppercase text-center'>Menu</a>
                        </div>
                        <div className='h-20 text-white px-5 pt-4 hover:bg-white duration-700 hover:text-black'>
                            <a href="" className='text-4xl  uppercase text-center'>Events</a>
                        </div>
                      
                    </div>

                </div>

                <nav className='text-white flex relative justify-end w-full pr-20 pt-10 gap-5'>
                    <div><a href="" className='w-20 h-20'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" className='hover:scale-110 transition-all duration-700'/></svg></a></div>
                    <div><a href="" className='w-20 h-20'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" fill="#ffffff" className='hover:scale-110 duration-700'/></svg></a></div>
                    <div><a href="" className='w-20 h-20'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" className='hover:scale-110 duration-700'/></svg></a></div>
                  
                </nav>
            </header>
        </section>
    )
}