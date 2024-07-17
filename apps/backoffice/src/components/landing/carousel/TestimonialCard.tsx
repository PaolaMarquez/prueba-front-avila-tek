import { StarIcon } from "@heroicons/react/24/solid";

export default function TestimonialCard() {
  return (
    <div className="relative h-[28rem] w-80 flex justify-center">
      <img
        className="h-full w-full absolute"
        src="https://i.pinimg.com/564x/fa/9c/4b/fa9c4bccfffa98a27009017c63c27d26.jpg"
      />
      <div className="absolute w-64 max-h-max bottom-0 m-5 p-5 flex items-center border border-gray-200 backdrop-blur-md">
        <div className="">
          <div className="flex gap-x-1">
            <StarIcon className="w-4 text-white" />
            <StarIcon className="w-4 text-white" />
            <StarIcon className="w-4 text-white" />
            <StarIcon className="w-4 text-white" />
            <StarIcon className="w-4 text-white" />
          </div>
          <p className="text-white text-2xl font-semibold py-3">Alisa Hester</p>
          <p className="text-white text-sm font-semibold pb-0.5">
            PM, Hourglass
          </p>
          <p className="text-white text-xs">Web Design Agency</p>
        </div>
      </div>
    </div>
  );
}
