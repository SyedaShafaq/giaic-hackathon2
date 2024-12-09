"use client"
 
import { Key } from "lucide-react";
import Image from "next/image";

interface Props{
  items: {
    id: string;
    image: string;
    title: string;
    description: string;
    Rp: string;
}

}
 
const data1 = [
  {
    id:"1",
    image:"/images/ourproduct1.png",
    title: "Syltherine",
    description: "Stylish cafe chair",
    Rp: "2.500.000",

     
  },
  {
    id:"2",
    image:"/images/ourproduct2.png",
    title: "Leviosa",
    description: "Stylish cafe chair",
    Rp: "2.500.000",
  },
  {
    id:"3",
    image:"/images/ourproduct3.png",
    title: "Lolito",
    description: "Luxury big sofa",
    Rp: "7.000.000",
  },
  {
    id:"4",
    image:"/images/ourproduct4.jpg",
    title: "Respira",
    description: " Outdoor bar table and stool",
    Rp: "500.000",
  },
  {
    id:"5",
    image:"/images/ourproduct5.png",
    title: "Grifo",
    description: "Night lamp",
    Rp: "1.500.000",
  },
  {
    id:"6",
    image:"/images/ourproduct6.png",
    title: "Muggo",
    description: "Small mug",
    Rp: "150.000",
  },
  {
    id:"7",
    image:"/images/ourproduct7.jpg",
    title: "Pingky",
    description: "Cute bed set",
    Rp: "7.000.000",
  },
  {
    id:"8",
    image:"/images/ourproduct8.jpg",
    title: "Potty",
    description: "Minimalist flower pot",
    Rp: "500.000",
  },
];

const Cart = () => {
  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-col-4 gap-10 lg:gap-x-5 lg:gap-y-8">
      {data1.map((items, index) => {
        return (
          <div>
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
             {index.toFixed()}

              <Image
                src={items.image}
                alt={items.title}
                className="lg:w-[285px] w-full h-[301px]"
                width={300}
                height={300}
              />

              <h2 className="mt-2 text-sm font-medium text-center">
                {items.title}
              </h2>
              <p className="mt-1 text-sm text-gray-500 text-center">
                {items.description}
              </p>
              <p className="mt-1 text-lg text-gray-500 text-center">
                {items.Rp}
              </p>
<div className="flex justify-center items-center">

              <button className="mt-2 w-full px-4 py-2 text-sm font-medium text-primary bg-background rounded-md">
                Add to Cart
              </button>
</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
