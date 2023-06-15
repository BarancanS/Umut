import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-[calc(100vh-12rem)] w-full p-5">
      <div className="w-10/12 mx-auto items-center justify-items-center grid grid-cols-4 max-lg:grid-cols-2 max-xl:grid-cols-3  max-md:grid-cols-1 gap-5">
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Expo Kule
          </h1>
          <div
            style={{ backgroundImage: "url(/expo-kule.jpeg)" }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Expo Kongre Merkezi
          </h1>
          <div
            style={{ backgroundImage: "url(/expo-kongre-merkezi.jpeg)" }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Park Forbes
          </h1>
          <div
            style={{ backgroundImage: "url(/park-forbes.jpeg)" }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>

        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Port Bosphorus Hotel
          </h1>
          <div
            style={{ backgroundImage: "url(/PortBosphorus.jpeg)" }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Atatürk Kültür Merkezi
          </h1>
          <div
            style={{ backgroundImage: "url(/Akm.jpeg)" }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Taksim Acıbadem
          </h1>
          <div
            style={{ backgroundImage: "url(/TaksimAcıbadem.jpeg)" }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Tatweer Touristic Village
          </h1>
          <div
            style={{ backgroundImage: "url(/TatweerTouristicVillage.jpeg)" }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Tatweer Commercial Comlex
          </h1>
          <div
            style={{ backgroundImage: "url(/TatweerCommercialComlex.jpeg)" }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Crowne Plaza
          </h1>
          <div
            style={{ backgroundImage: "url(/CrownePlaza.jpeg)" }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Riyad King Abdullah Foundation
          </h1>
          <div
            style={{
              backgroundImage: "url(/RiyadKingAbdullahFoundation.jpeg)",
            }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Sharjah Alqasba Tower
          </h1>
          <div
            style={{
              backgroundImage: "url(/SharjahAlqasbaTower.jpeg)",
            }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
        <Link href="#">
          <h1 className="text-xl text-center hover:scale-105 text-orange-700 font-semibold">
            Le Meridien Hotel
          </h1>
          <div
            style={{
              backgroundImage: "url(/LeMeridienHotel.jpeg)",
            }}
            className="w-64 bg-white brightness-50 h-64 bg-cover bg-no-repeat bg-center hover:scale-105 hover:brightness-100 transition-all duration-500 ease-in-out"
          ></div>
        </Link>
      </div>
    </main>
  );
};

export default page;
