import Image from 'next/image';

export default function FuniroFurniture() {
  return (
    <div className="md:visible invisible min-h-screen bg-background relative top-[2000px] text-black flex flex-col items-center py-12">
     <div className=' mb-10'>

      {/* Heading */}
      <h1 className="text-2xl opacity-35 font-semibold text-center">
      Share your setup with
      </h1>
          <h1 className="text-black font-bold text-4xl">#FuniroFurniture</h1>
     </div>

       {/* Image Grid */}
       <div className="relative grid grid-cols-12 gap-4 max-w-6xl px-4">
        {/* Image 1 */}
        <div className="col-span-6 sm:col-span-4 relative group">
          <Image
            src="/images/img1.png"
            alt="Setup 1"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={500}
            height={500}
          />
        </div>

        {/* Image 2 */}
        <div className="col-span-6 sm:col-span-4 relative group">
          <Image
            src="/images/img2.png"
            alt="Setup 2"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={500}
            height={600}
          />
        </div>

        {/* Image 3 */}
        <div className="col-span-6 sm:col-span-4 relative group -mt-8 sm:-mt-12">
          <Image
            src="/images/img3.png"
            alt="Setup 3"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={500}
            height={400}
          />
        </div>

        {/* Image 4 */}
        <div className="col-span-6 sm:col-span-6 relative group -mt-24">
          <Image
            src="/images/img4.png"
            alt="Setup 4"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={400}
            height={200}
          />
        </div>
        <div className="col-span-6 sm:col-span-4 relative group -left-24">
          <Image
            src="/images/img1.png"
            alt="Setup 1"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-6 sm:col-span-4 relative group left-[855px] bottom-[475px] -mt-8">
          <Image
            src="/images/img6.png"
            alt="Setup 6"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={500}
            height={400}
          />
        </div>
        {/* Image 8 */}
        <div className="col-span-6 sm:col-span-6 relative group left-[425px] bottom-[305px]">
          <Image
            src="/images/img8.png"
            alt="Setup 8"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={400}
            height={500}
          />
        </div>
        <div className="col-span-6 sm:col-span-6 relative group -mt-6 bottom-[555px]">
          <Image
            src="/images/img7.png"
            alt="Setup 7"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={400}
            height={400}
          />
        </div>


        {/* Image 5 */}
        <div className="col-span-6 sm:col-span-6 relative group bottom-[595px] right-[165px] -mt-8">
          <Image
            src="/images/img5.png"
            alt="Setup 5"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={400}
            height={500}
          />
        </div>

 <div className="col-span-6 sm:col-span-4 relative group bottom-[555px]">
          <Image
            src="/images/img1.png"
            alt="Setup 1"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={500}
            height={500}
          />
        </div>
        {/* Image 6 */}
        <div className="col-span-6 sm:col-span-4 relative group left-[45px] bottom-[900px] -mt-8">
          <Image
            src="/images/img6.png"
            alt="Setup 6"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={500}
            height={400}
          />
        </div>

        {/* Image 7 */}
        <div className="col-span-6 sm:col-span-6 relative group left-[805px] bottom-[1300px] -mt-6">
          <Image
            src="/images/img7.png"
            alt="Setup 7"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={400}
            height={500}
          />
        </div>

        {/* Image 8 */}
        <div className="col-span-6 sm:col-span-6 right-[165px] bottom-[1150px] relative group">
          <Image
            src="/images/img8.png"
            alt="Setup 8"
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
            width={400}
            height={500}
          />
        </div>
        
         
      </div>
    </div>
  );
}
