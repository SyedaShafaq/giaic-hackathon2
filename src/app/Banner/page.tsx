import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 ">
      <div className="mx-auto realtive top-[-75px]">
        <div className="flex items-center relative z-100">
          <Image
            src="/images/heroSectionpic.jpg"
            alt="Furniture Banner"
            width={1440}
            height={716}
            className="lg:w-[1440px] w-[95%] lg:h-[616.83px] h-[75%] "
          />
        <div className=" lg:w-[603px] w-[60%] lg:h-[403px] top-[25px] left-[50px] h-[40%] text-center lg:text-left absolute z-10 bg-white lg:top-[123px] lg:left-[639px] rounded-md" >
          <p className="lg:text-md lg:font-semibold text-sm text-black lg:px-4 lg:mt-5 uppercase ml-2">New Arrival</p>
          <h1 className="lg:text-6xl text-lg font-bold text-primary text-balance lg:px-4 lg:mt-5 lg:mb-4">Discover Our New Collection</h1>
          <p className="text-gray-600 md:visible lg:visible xl:visible invisible text-balance px-5 mt-5 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="lg:px-4 lg:mt-5 md:visible lg:visible xl:visible invisible">

          <button className="lg:px-9 lg:py-3  text-white bg-primary rounded-md hover:bg-yellow-800">
            Buy Now
          </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
