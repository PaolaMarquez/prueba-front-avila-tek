import { Button } from "@avila-tek/ui/button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Chart from "./charts/Chart";

export default function EmailCTA() {
  return (
    <div className="relative">
      <div className="flex flex-col mt-24 bg-purple w-4xl rounded-2xl mx-20 justify-center items-center text-center gap-y-10 px-52 pt-20 pb-48">
        <p className="text-7xl text-white font-bold">Grow your users.</p>
        <p className="text-7xl text-gray-300 font-bold">Smarter.</p>
        <p className="text-xl text-gray-300 font-medium">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="w-7/12">
          <div className="flex mt-2 gap-x-2">
            <div className="relative w-full">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <QuestionMarkCircleIcon className="w-4 h-4 tooltip absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <Button
              className="bg-purpleButton text-white min-w-28 hover:bg-hoverPurple"
              children={<p>Get started</p>}
            />
          </div>
          <a className="block text-sm font-normal leading-6 text-gray-300 text-left mt-1">
            We care about your data in our{" "}
            <span className="underline">privacy policy</span>
          </a>
        </div>
      </div>
      <div className="w-full top-4 right-4 z-50">
        <Chart />
      </div>
    </div>
  );
}
