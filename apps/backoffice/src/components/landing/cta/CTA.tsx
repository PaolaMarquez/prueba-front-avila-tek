import TwoButtons from "@/components/landing/.general/TwoButtons";
import TitleDescription from "../.general/TitleDescription";
import Button from "@avila-tek/ui/button";

interface Props {
  title: JSX.Element;
  gallery?: JSX.Element;
  desc: string;
  img?: string;
  bg: string;
}

export default function CTA({ title, desc, img, bg, gallery }: Props) {
  const isLight = bg.includes("bg-transparent");
  return (
    <div className={`${isLight ? "bg-slate-50" : "bg-white"}`}>
      <div className="mx-auto max-w-[76rem] py-16 sm:px-6 sm:py-10 lg:px-8">
        <div
          className={`${bg} pt-16 sm:rounded-3xl lg:flex lg:justify-between lg:gap-x-10 lg:pl-16 lg:pt-0`}
        >
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
            <TitleDescription
              title={title}
              description={desc}
              classNameTitle={`${isLight ? "text-black" : "text-white"}`}
              classNameDesc={`text-center lg:text-left ${isLight ? "text-gray-500" : "text-gray-200"}`}
            />
            <TwoButtons text1={"Learn more"} text2={"Get started"} />
          </div>
          {img && (
            <img
              alt="App screenshot"
              src={img}
              className="w-full lg:w-[30rem] max-w-none lg:rounded-l-none rounded-b-3xl lg:rounded-r-3xl bg-white/5 ring-1 ring-white/10"
            />
          )}
          {gallery}
        </div>
      </div>
    </div>
  );
}
