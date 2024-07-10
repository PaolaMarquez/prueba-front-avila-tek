import { Button } from "@avila-tek/ui/button";

interface props {
  title: JSX.Element;
  desc: string;
  img: string;
  bg: string;
}

export default function CTA({ title, desc, img, bg }: props) {
  const isLight = bg === "bg-transparent";
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[76rem] py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          className={`${bg} pl-6 pt-16 sm:rounded-3xl sm:pl-10 md:pt-24 lg:flex lg:justify-between lg:gap-x-10 lg:pl-16 lg:pt-0`}
        >
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
            <h2
              className={`text-3xl font-bold tracking-tight ${isLight ? "text-black" : "text-white"} sm:text-4xl`}
            >
              {title}
            </h2>
            <p
              className={`mt-6 text-lg leading-8 ${isLight ? "text-gray-500" : "text-gray-300"}`}
            >
              {desc}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button
                className="bg-white hover:bg-gray-200 text-black border "
                children={<p>Learn more</p>}
              />
              <Button
                className="bg-purpleButton hover:bg-purple text-white"
                children={<p>Get started</p>}
              />
            </div>
          </div>
          <img
            alt="App screenshot"
            src={img}
            className="w-[30rem] max-w-none rounded-r-3xl bg-white/5 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
