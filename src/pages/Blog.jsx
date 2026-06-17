import {Link} from "react-router-dom"
import Animation from "../components/Animation"
function Blog() {
    return (
        <div class="bg-zinc-900">
            <div className="relative h-[90vh]">
                <img src="/images/banner.jpg" alt="Menu Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Animation><h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold"> Our Blog </h1></Animation>
                </div>
            </div>
            <div className="grid gap-4 md:gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 mb-8 px-6 md:px-12 lg:px-24 pt-2 md:pt-6 lg:pt-12">
                <Animation><div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
                    <div className="overflow-hidden">
                        <img src="/images/italian1.jpg" alt="Italian food" />
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-gray-400 mb-2">Feb 20, 2026</p>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3"> Top 5 Italian Dishes You Must Try </h2>
                        <p className="text-gray-500 mb-4"> Discover delicious Italian dishes that will tantalize your taste buds... </p>
                        <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-600 transition"> Read More </button>
                    </div>
                </div></Animation>
                <Animation><div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
                    <div className="overflow-hidden">
                        <img src="/images/italian2.jpg" alt="Italian food" />
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-gray-400 mb-2">Feb 15, 2026</p>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3"> Healthy Salads for Every Season </h2>
                        <p className="text-gray-500 mb-4"> Fresh, healthy, and easy-to-make salads perfect for any meal... </p>
                        <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-600 transition"> Read More </button>
                    </div>
                </div></Animation>
                <Animation><div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
                    <div className="overflow-hidden">
                        <img src="/images/italian3.jpg" alt="Italian food" />
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-gray-400 mb-2">Feb 10, 2026</p>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3"> The Art of Baking Perfect Bread </h2>
                        <p className="text-gray-500 mb-4"> Learn the secrets to baking soft, crusty, and delicious bread at home... </p>
                        <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-600 transition"> Read More </button>
                    </div>
                </div></Animation>
            </div>
            <div className=" bg-slate-900 px-6 py-32">
                <Animation><p className="text-center text-gray-400">Let's get started</p></Animation>
                <Animation><h1 className="text-white text-center lg:text-5xl md:text-3xl text-3xl font-bold lg:py-3 py-2.5">Ready to enjoy delicious meals with your family?</h1></Animation>
                <Animation><h4 className="text-gray-400 text-center pb-6 pt-2 max-w-2xl mx-auto">Experience fresh flavors, quality ingredients, and unforgettable taste at Foodie Hub.</h4></Animation>
                <Animation><Link to="/Contact" className="bg-yellow-400 hover:bg-yellow-600 rounded-2xl text-center h-12 w-32 flex items-center justify-center text-black font-semibold mx-auto transition duration-300">Contact Us</Link></Animation>
            </div>
        </div>
    )
}

export default Blog
