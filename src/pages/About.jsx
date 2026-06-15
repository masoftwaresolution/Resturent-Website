
import { Link } from "react-router-dom";
function About() {
    return (
        <div>
            <div className="relative ">
                <div>
                    <img src="/images/Bake.jpg" alt="Food Pic" className="w-full h-[60vh] object-cover" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24 ">
                    <p className="text-white lg:text-center pt-20 md:pt-20 lg:pt-20">Discover the passion, flavors, and creativity that go into every plate.</p>
                    <h1 className="text-white text-2xl md:text-6xl lg:text-6xl font-bold lg:text-center">Welcome to My Website</h1>
                    <p className="text-white pt-1 lg:pt-4 lg:text-center mx-auto w-full lg:w-3xl">Behind every dish lies dedication, craftsmanship, and authentic taste.We carefully select fresh ingredients and blend them with culinary expertise. Enjoy a dining experience crafted with love and perfection.</p>
                    <Link to="/Contact" className="bg-yellow-400 hover:bg-yellow-600 rounded-2xl px-6 py-4 md:mx-auto lg:mx-auto flex items-center justify-center text-black font-semibold mt-1 md:mt-4 lg:mt-4 transition duration-300">Contact Us</Link>
                </div>
            </div >
            <div className="bg-zinc-900 px-6 md:px-12 lg:px-24">
                <h1 className="text-center lg:text-5xl md:text-3xl text-3xl font-bold text-white pt-8">About Us </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 md:gap-8 lg:gap-10 pb-8">
                    <div className="h-auto w-auto bg-gray-500 rounded-3xl">
                        <img src="/images/plate1.jpg" alt="plate1" className="h-full w-full rounded-2xl" />
                    </div>
                    <div className="h-auto w-auto bg-white flex justify-center items-center flex-col text-center pt-8 rounded-2xl">
                        <p className="text-gray-400 text-center">Taste Participate</p>
                        <h1 className="text-4xl text-black text-center font-semibold">Traditional <br /> & Modern</h1>
                        <p className="text-gray-400 text-center">Discover the passion, flavors, and creativity <br /> that go into every plate.</p>
                        <Link to="/Contact" className="bg-yellow-400 hover:bg-yellow-600 rounded-2xl px-8 py-4 md:mx-auto lg:mx-auto mb-6 flex items-center justify-center text-black font-semibold mt-1 md:mt-4 lg:mt-4 transition duration-300">Reserve Table</Link>
                    </div>
                    <div className="h-auto w-auto bg-gray-500  rounded-3xl">
                        <img src="/images/plate2.jpg" alt="plate2" className="h-full w-full rounded-2xl" />

                    </div>
                </div>
            </div>
            <div className="py-16 px-6 md:px-12 lg:px-24 bg-zinc-900">
                <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
                <div className="w-full mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white shadow-lg rounded-2xl">
                        <h3 className="text-xl font-semibold mb-3">Fresh Ingredients</h3>
                        <p className="text-gray-600"> We use only high-quality and freshly sourced ingredients. </p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-2xl">
                        <h3 className="text-xl font-semibold mb-3">Expert Chefs</h3>
                        <p className="text-gray-600"> Our chefs bring years of culinary expertise and passion. </p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-2xl">
                        <h3 className="text-xl font-semibold mb-3">Cozy Ambience</h3>
                        <p className="text-gray-600"> Experience a warm and welcoming dining environment.  </p>
                    </div>
                </div>
            </div>
            <div className=" bg-slate-900 px-6 py-32">
                <p className="text-center text-gray-400">Let's get started</p>
                <h1 className="text-white text-center lg:text-5xl md:text-3xl text-3xl font-bold lg:py-3 py-2.5">Ready to enjoy delicious meals with your family?</h1>
                <h4 className="text-gray-400 text-center pb-6 pt-2 max-w-2xl mx-auto">Experience fresh flavors, quality ingredients, and unforgettable taste at Foodie Hub.</h4>
                <Link to="/Contact" className="bg-yellow-400 hover:bg-yellow-600 rounded-2xl text-center h-12 w-32 flex items-center justify-center text-black font-semibold mx-auto transition duration-300">Contact Us</Link>
            </div>
        </div>

    )
}

export default About