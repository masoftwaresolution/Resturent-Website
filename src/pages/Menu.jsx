import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <div className="relative h-[50vh]">
        <img
          src="/images/banner.jpg"
          alt="Menu Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white lg:text-5xl md:text-3xl text-3xl font-bold">
            {" "}
            Our Delicious Menu{" "}
          </h1>
        </div>
      </div>
      <div className="bg-zinc-900">
        <div className="py-12 text-center">
          <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold mb-10 text-white">
            Explore Our Categories
          </h2>
          <div className="flex justify-center gap-2 lg:gap-10 flex-wrap pb-6">
            <button
              onClick={() => setCategory("All")}
              className="h-auto w-auto px-5 py-3 lg:px-12 lg:py-4 bg-gray-200 text-black hover:bg-orange-500 hover:text-white rounded-2xl"
            >
              {" "}
              All{" "}
            </button>
            <button
              onClick={() => setCategory("Fast Food")}
              className="h-auto w-auto px-3 py-3 lg:px-12 lg:py-4 bg-gray-200 rounded-2xl hover:bg-orange-500 hover:text-white transition"
            >
              {" "}
              Fast Food{" "}
            </button>
            <button
              onClick={() => setCategory("Desi")}
              className="h-auto w-auto px-3 py-3 lg:px-12 lg:py-4 bg-gray-200 rounded-2xl hover:bg-orange-500 hover:text-white transition"
            >
              {" "}
              Desi{" "}
            </button>
            <button
              onClick={() => setCategory("Drinks")}
              className="h-auto w-auto px-3 py-3 lg:px-12 lg:py-4 bg-gray-200 rounded-2xl hover:bg-orange-500 hover:text-white transition"
            >
              {" "}
              Drinks{" "}
            </button>
          </div>
          <div className="px-6 md:px-12 lg:px-24">
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
              {(category === "All" || category === "Fast Food") && (
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <img
                    src="/images/burger.jpg"
                    alt="Burger"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="text-xl font-semibold">Zinger Burger</h3>
                    <p className="text-gray-400 my-2">
                      {" "}
                      Crunchy Zinger chicken fillet with fresh lettuce and our
                      special mayo sauce.{" "}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-orange-500 font-bold text-lg">
                        {" "}
                        Rs. 750{" "}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                        {" "}
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {(category === "All" || category === "Fast Food") && (
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <img
                    src="/images/pizza.jpg"
                    alt="Burger"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="text-xl font-semibold">Pizza</h3>
                    <p className="text-gray-400 my-2">
                      {" "}
                      Delicious pizza with melted mozzarella, flavorful
                      toppings, and a crispy crust.{" "}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-orange-500 font-bold text-lg">
                        {" "}
                        Rs. 650{" "}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                        {" "}
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {(category === "All" || category === "Fast Food") && (
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <img
                    src="/images/sandwitch.jpg"
                    alt="Burger"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="text-xl font-semibold">Sandwitch</h3>
                    <p className="text-gray-400 my-2">
                      {" "}
                      Toasted sandwich layered with fresh veggies and savory
                      ingredients for the perfect bite.{" "}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-orange-500 font-bold text-lg">
                        {" "}
                        Rs. 650{" "}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                        {" "}
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {(category === "All" || category === "Desi") && (
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <img
                    src="/images/muttonkarahi.webp"
                    alt="Burger"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="text-xl font-semibold">Mutton Karahi</h3>
                    <p className="text-gray-400 my-2">
                      {" "}
                      Slow-cooked mutton karahi prepared with rich spices and
                      freshly chopped herbs.{" "}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-orange-500 font-bold text-lg">
                        {" "}
                        Rs. 650{" "}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                        {" "}
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {(category === "All" || category === "Desi") && (
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <img
                    src="/images/biryani.jpg"
                    alt="Burger"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="text-xl font-semibold">Chicken Biryani</h3>
                    <p className="text-gray-400 my-2">
                      {" "}
                      Classic chicken biryani prepared with juicy chicken,
                      premium rice, and rich traditional flavors.{" "}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-orange-500 font-bold text-lg">
                        {" "}
                        Rs. 650{" "}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                        {" "}
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {(category === "All" || category === "Desi") && (
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <img
                    src="/images/haleem.jpg"
                    alt="Burger"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="text-xl font-semibold">Haleem</h3>
                    <p className="text-gray-400 my-2">
                      {" "}
                      Creamy haleem prepared with tender meat, lentils, and a
                      blend of authentic spices.{" "}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-orange-500 font-bold text-lg">
                        {" "}
                        Rs. 650{" "}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                        {" "}
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {(category === "All" || category === "Drinks") && (
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <img
                    src="/images/juice.jpg"
                    alt="Burger"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="text-xl font-semibold">Lemon Drink</h3>
                    <p className="text-gray-400 my-2">
                      {" "}
                      A chilled and refreshing lemon drink perfect for any time
                      of the day.{" "}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-orange-500 font-bold text-lg">
                        {" "}
                        Rs. 650{" "}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                        {" "}
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {(category === "All" || category === "Drinks") && (
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <img
                    src="/images/milkshak.jpg"
                    alt="Burger"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="text-xl font-semibold">Milk Shak</h3>
                    <p className="text-gray-400 my-2">
                      {" "}
                      Indulge in our thick and flavorful milkshake made with
                      premium ingredients.{" "}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-orange-500 font-bold text-lg">
                        {" "}
                        Rs. 650{" "}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                        {" "}
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <h2 className="lg:text-5xl md:text-3xl text-3xl pt-4 font-bold text-center mb-12 text-white">
          {" "}
          Today's Special Offers{" "}
        </h2>
        <div className="w-auto mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-12 lg:px-24">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img
              src="/images/familyoffer1.jpg"
              alt="Deal 1"
              className="h-76 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2"> Family Deal </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                2 Zinger Burgers, 1 Large Pizza, 4 Drinks at a special
                price.{" "}
              </p>
              <span className="text-orange-500 font-bold text-xl">
                {" "}
                Rs. 2499{" "}
              </span>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img
              src="/images/deal2.jpg"
              alt="Deal 2"
              className="h-76 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2"> Lunch Combo </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                Chicken Biryani with Salad and Drink.{" "}
              </p>
              <span className="text-orange-500 font-bold text-xl">
                {" "}
                Rs. 899{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-zinc-900">
        <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-center mb-12 text-white">
          {" "}
          What Our Customers Say{" "}
        </h2>
        <div className="w-auto mx-auto grid md:grid-cols-3 gap-4 px-6 md:px-12 lg:px-24">
          <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
            <p className="text-gray-600 mb-4">
              {" "}
              "Amazing taste and quick service. Highly recommended!"{" "}
            </p>
            <h4 className="font-semibold">Ali Khan</h4>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
            <p className="text-gray-600 mb-4">
              {" "}
              "The ambience and food quality both are excellent."{" "}
            </p>
            <h4 className="font-semibold">Sara Ahmed</h4>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
            <p className="text-gray-600 mb-4">
              {" "}
              "Best biryani in town. Will definitely visit again."{" "}
            </p>
            <h4 className="font-semibold">Usman Raza</h4>
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
  );
}

export default Menu;
