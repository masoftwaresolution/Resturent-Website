import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TrustedCustomers from "../components/TrustedCustomers";
import HappyCustomers from "../components/HappyCustomers";
import LocationCustomers from "../components/LocationCustomers";
import Animation from "../components/Animation";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <div className="relative w-full h-screen overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" src="/images/Heropic.mp4" autoPlay loop muted />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 text-white pt-4">
                    <Animation><h1 className="text-3xl md:text-5xl lg:text-7xl tracking-wide font-bold md:text-center lg:text-center pt-16 md-pt-32 lg:pt-0 text-yellow-400">Best Catering Website</h1></Animation>
                    <Animation><p className="max-w-3xl mt-4 mx-0 md:mx-auto lg:mx-auto lg:text-center"> Fresh ingredients and authentic flavors come together to create unforgettable taste in every dish. Crafted with passion and care, our food is made to delight your senses and satisfy your cravings.</p></Animation>
                    <Animation><div className="mt-4 mx-auto flex flex-col md:flex-row lg:flex-row gap-4">
                        <Link to="/Contact" className="bg-yellow-400 hover:bg-yellow-600 text-2xl mx-auto rounded-2xl h-auto w-auto px-5 py-3 flex items-center justify-center text-black font-semibold transition duration-300">Reserve Table</Link>
                    </div></Animation>
                    
                    
                </div>
            </div>

            <div className="bg-zinc-900">
                <Animation><h1 className="lg:text-5xl md:text-3xl text-3xl font-bold text-center text-white pt-8">Popular Menue</h1></Animation>
                <Animation><p className="text-center mt-3 text-gray-400">Discover our most loved dishes, crafted with passion and served with <br /> a smile</p></Animation>
                
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-24 mt-8">
                    <Animation><div className="bg-[#F8F8F8] rounded-2xl shadow-lg overflow-hidden mb-12 hover:border-yellow-400 hover:border-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                        <div className="relative">
                            <img src="./images/chickenberyani.jpg" alt="Burger" className="w-full h-60 object-cover rounded-t-xl" />
                            <span className="absolute top-3 right-3 bg-yellow-500 text-black font-semibold text-sm px-3 py-1 rounded-full"> $89.99 </span>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800"> Chicken Beryani </h3>
                            <p className="text-sm text-gray-500 mt-2"> Basmati rice with tender chicken, aromatic spices, and rich flavors. </p>
                            
                        </div>
                    </div></Animation>
                    <Animation><div className="bg-[#F8F8F8] rounded-2xl shadow-lg overflow-hidden mb-12 hover:border-yellow-400 hover:border-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                        <div className="relative">
                            <img src="./images/burgerm.jpg" alt="Burger" className="w-full h-60 object-cover rounded-t-xl" />
                            <span className="absolute top-3 right-3 bg-yellow-500 text-black font-semibold text-sm px-3 py-1 rounded-full"> $59.99 </span>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800"> Zinger Burger </h3>
                            <p className="text-sm text-gray-500 mt-2"> Juicy grilled patty with fresh lettuce, tomato, cheese, and signature sauce. </p>
                            
                        </div>
                    </div></Animation>
                    <Animation><div className="bg-[#F8F8F8] rounded-2xl shadow-lg overflow-hidden mb-12 hover:border-yellow-400 hover:border-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                        <div className="relative">
                            <img src="./images/salad.jpg" alt="Burger" className="w-full h-60 rounded-t-xl object-cover" />
                            <span className="absolute top-3 right-3 bg-yellow-500 text-black font-semibold text-sm px-3 py-1 rounded-full"> $49.99 </span>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800"> Salad </h3>
                            <p className="text-sm text-gray-500 mt-2"> Crisp fresh vegetables tossed with flavorful dressing for a healthy bite. </p>
                            
                        </div>
                    </div></Animation>
                    <Animation><div className="bg-[#F8F8F8] rounded-2xl shadow-lg overflow-hidden mb-12 hover:border-yellow-400 hover:border-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                        <div className="relative">
                            <img src="./images/icecream.jpg" alt="Burger" className="w-full h-60 rounded-t-xl object-cover" />
                            <span className="absolute top-3 right-3 bg-yellow-500 text-black font-semibold text-sm px-3 py-1 rounded-full"> $29.99 </span>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800"> Ice-Cream </h3>
                            <p className="text-sm text-gray-500 mt-2"> Creamy and delicious frozen dessert with rich flavor and smooth texture. </p>
                            
                        </div>
                    </div></Animation>
                    
                </div>
            </div>
            <div className=" bg-zinc-900">
                <div className="px-6 md:px-12 lg:px-24">
                    <div className="lg:flex lg:justify-between lg:items-center">
                        <div >
                            <Animation><h1 className="text-5xl font-bold text-white pt-6">Our Story</h1></Animation>
                            <Animation><p className="w-full lg:w-xl text-gray-400 pt-3 text-justify">Our restaurant was born from a simple idea: to serve great food made with honesty, passion, and the finest ingredients. Every recipe is carefully crafted to balance authentic flavors with a modern touch, ensuring each dish delivers both comfort and quality. From the kitchen to the table, we focus on freshness, consistency, and taste that keeps our guests coming back.</p></Animation>
                            <Animation><p className="w-full lg:w-xl text-gray-400 pt-1 text-justify">More than just a place to eat, our restaurant is a space where people connect and create memories. Whether you're sharing a meal with family, meeting friends, or enjoying a quiet moment, we strive to offer warm hospitality and a welcoming atmosphere. Every visit is meant to feel special, with food that speaks for itself and service that makes you feel at home.</p></Animation>
                            <div className="flex gap-10 lg:gap-20 items-center py-10">
                                <Animation><div className="flex flex-col items-center">
                                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center hover:border-2 hover:border-yellow-400"><PersonIcon className="text-yellow-500" sx={{ fontSize: 30 }} /></div>
                                    <h1 className="text-xl font-bold mt-3 text-white"><HappyCustomers /></h1>
                                    <p className="text-gray-500 text-sm">Happy Customers</p>
                                </div></Animation>
                                <Animation><div className="flex flex-col items-center mr-8">
                                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center hover:border-2 hover:border-yellow-400"><EmojiEventsIcon className="text-yellow-500" sx={{ fontSize: 30 }} /></div>
                                    <h1 className="text-xl font-bold mt-3 text-white" ><TrustedCustomers /></h1>
                                    <p className="text-gray-500 text-sm">Awards Won</p>
                                </div></Animation>
                                <Animation><div className="flex flex-col items-center">
                                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center hover:border-2 hover:border-yellow-400"><LocationOnIcon className="text-yellow-500" sx={{ fontSize: 30 }} /></div>
                                    <h1 className="text-xl font-bold mt-3 text-white"><LocationCustomers/></h1>
                                    <p className="text-gray-500 text-sm">Locations</p>
                                </div></Animation>
                            </div>
                        </div>
                        <div>
                            <Animation><img src="./images/story.jpg" alt="Burger" className="h-96 w-full lg:w-110 rounded-3xl" /></Animation>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-900 h-auto px-6 md:px-12 lg:px-24 pb-4">
                <Animation><h1 className="text-4xl font-bold text-white text-center pt-8">Visit Us</h1></Animation>
                <Animation><p className="lg:text-center md:text-center text-gray-400 mt-1">Discover our most loved dishes, crafted with passion and served with a smile</p></Animation>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-6 gap-4 md:gap-4 lg:gap-10">
                    <Animation><div className="h-52 w-auto bg-white rounded-xl flex flex-col hover:border-yellow-400 hover:border-4 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                        <LocationOnIcon sx={{ fontSize: 70 }} className="text-yellow-400 text-5xl text-center mx-auto mt-6 mb-2" />
                        <span className="text-center text-black font-bold">Main Location</span>
                        <span className="text-center text-gray-400">123 Food Street <br /> XYZ City, DC 12345</span>
                    </div></Animation>
                    <Animation><div className="h-52 w-auto bg-white rounded-xl flex flex-col hover:border-yellow-400 hover:border-4 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                        <CallIcon sx={{ fontSize: 70 }} className="text-yellow-400 text-5xl text-center mx-auto mt-6 mb-2" />
                        <span className="text-center text-black font-bold">Call Us</span>
                        <span className="text-center text-gray-400">(555) 123-8765 <br /> (555) 123-9870</span>
                    </div></Animation>
                    <Animation><div className="h-52 w-auto bg-white rounded-xl flex flex-col hover:border-yellow-400 hover:border-4 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                        <AccessTimeIcon sx={{ fontSize: 70 }} className="text-yellow-400 text-5xl text-center mx-auto mt-6 mb-2" />
                        <span className="text-center text-black font-bold">Hours</span>
                        <span className="text-center text-gray-400">Mon-Thu: 10AM-10PM<br /> Fri-Sun:10AM-11PM</span>
                    </div></Animation>
                </div>
            </div>
            <div className=" bg-slate-900 px-6 py-32">
                <Animation><p className="text-center text-gray-400">Let's get started</p></Animation>
                <Animation><h1 className="text-white text-center lg:text-5xl md:text-3xl text-3xl font-bold lg:py-3 py-2.5">Ready to enjoy delicious meals with your family?</h1></Animation>
                <Animation><h4 className="text-gray-400 text-center pb-6 pt-2 max-w-2xl mx-auto">Experience fresh flavors, quality ingredients, and unforgettable taste at Foodie Hub.</h4></Animation>
                <Animation><Link to="/Contact" className="bg-yellow-400 hover:bg-yellow-600 rounded-2xl text-center h-12 w-32 flex items-center justify-center text-black font-semibold mx-auto transition duration-300">Contact Us</Link></Animation>
                
            </div>
        </div >

    )
}

export default Home