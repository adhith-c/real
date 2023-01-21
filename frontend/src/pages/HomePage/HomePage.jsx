import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Maps from "../../components/Maps";
import "./HomePage.css";
import SearchPage from "../../components/SearchBar";
import PropertyCard from "../../components/PropertyCard";
import Footer from "../../components/Footer";
import MyMap from "../../components/MyMap/MyMap";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";

function HomePage() {
  const [properties, setProperties] = useState([]);
  const token = useSelector(selectCurrentToken);
  useEffect(() => {
    console.log("hii");
    getPropertyData();
  }, [token]);
  const getPropertyData = async () => {
    console.log("token is:", token);
    const result = await axios.get("http://localhost:4000/property", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("result is", result.data.properties);
    //  setUserData(result.data.user);
    setProperties(result.data.properties);
  };

  return (
    <div className="w-full">
      <NavBar />
      <div className="homeBg bg-[url('homebg.jpg')] bg-cover bg-center h-screen flex justify-center items-center">
        <SearchPage />
      </div>
      <div
        className="w-full"
        id="map">
        {/* <MyMap /> */}
      </div>
      <div className="w-full bg-slate-700">
        <div className="flex justify-between item-center h-16 max-w-[1240px] mx-auto px-4">
          {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
          <h1 className="font-bold text-3xl mt-2 text-white">Sort Options</h1>
          <ul className="hidden md:flex ">
            <li className="p-4">Home</li>
            <li className="p-4">Property Type</li>
            <li className="p-4">Listing Type</li>
            <li className="p-4">Chats</li>
            <li className="p-4">Wishlist</li>
          </ul>
        </div>
      </div>
      {/* <div className=" max-w-[1400px] ml-10 mx-auto  bg-slate-700 grid grid-col-3 grid-flow-col">
        <div className="bg-white  w-[350px] flex items-center flex-col ">
          <div className=" text-2xl font-Jost font-semibold">
            Property For Rent
          </div>
          <div className="font-Jost text-sm">123 street ,NewYork ,USA</div>
          <div className=" container bg-[url('login2.jpg')] h-60 w-80 bg-center bg-cover"></div>
        </div>
        <div className="bg-white  w-[350px] flex items-center flex-col ">
          <div className=" text-2xl font-Jost font-semibold">
            Property For Rent
          </div>
          <div className="font-Jost text-sm">123 street ,NewYork ,USA</div>
          <div className=" container bg-[url('login2.jpg')] h-60 w-80 bg-center bg-cover"></div>
        </div>
        <div className="bg-white  w-[350px] flex items-center flex-col ">
          <div className=" text-2xl font-Jost font-semibold">
            Property For Rent
          </div>
          <div className="font-Jost text-sm">123 street ,NewYork ,USA</div>
          <div className="container bg-[url('login2.jpg')] h-60 w-80 bg-center bg-cover"></div>
        </div>
      </div> */}
      <div className="w-full bg-slate-700">
        <div className="w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {properties &&
            properties.map((property) => {
              return (
                <Link
                  to={{
                    pathname: `/propertyDetails/${property._id}`,
                    property: { property },
                  }}>
                  <PropertyCard
                    key={property._id}
                    property={property}
                  />
                </Link>
              );
            })}

          {/* <PropertyCard />
          <PropertyCard /> 

          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard /> */}
          {/* <div className="w-[300px] h-[200px] bg-white mb-4 flex items-center flex-col"></div>
          <div className="w-[300px] h-[200px] bg-white mb-4 flex items-center flex-col"></div>
          <div className="w-[300px] h-[200px] bg-white mb-4 flex items-center flex-col"></div>
          <div className="w-[300px] h-[200px] bg-white mb-4 flex items-center flex-col"></div>
          <div className="w-[300px] h-[200px] bg-white mb-4 flex items-center flex-col"></div>
          <div className="w-[300px] h-[200px] bg-white mb-4 flex items-center flex-col"></div> */}
        </div>
      </div>
      <div className="bg-slate-900">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
