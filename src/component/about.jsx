import coffe1 from "../assets/img/coffe1.avif"

export default function company() {
    return (
        <section className="bg-black text-white ">
            <h1 className="text-6xl text-center pt-20 font-semibold underline-offset-8 underline decoration-dotted">About Us</h1>
            <div className="flex flex-col lg:grid lg:grid-cols-2">
                <div className="mx-auto pt-20">
                    <img src={coffe1} alt="" />
                </div>
                <div className="pt-10">
                    <h1 className="px-10 py-5 text-3xl ">Black: A haven for coffee lovers in Tokyo</h1>
                    <p className="px-10 py-10">
                        Nestled in the heart of Tokyo's bustling Shibuya district, Black
                        Coffee is a haven for coffee enthusiasts seeking a truly authentic and
                        global coffee experience. This minimalist, contemporary café prides
                        itself on its meticulously crafted brews, sourced from the finest
                        coffee beans across the globe. Stepping into Black Coffee is akin to
                        embarking on a sensory journey around the world.
                        <br />     <br />
                        The aroma of freshly
                        roasted beans fills the air, inviting you to explore the diverse menu
                        that showcases the unique flavors and characteristics of each coffee
                        origin. Whether you're a fan of bold, full-bodied African coffees, the
                        delicate nuances of South American blends, or the fruity sweetness of
                        Asian beans.
                        
                    </p>
                    <div className="w-auto mx-10 pb-10">
                        <a href="" className=" px-5 rounded-xl border  border-dashed hover:bg-white hover:text-black duration-700   py-2 ">Learn more</a>
                    </div>
                </div>

            </div>
        </section>
    );
}
