import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface featureProps {
  img: string | JSX.Element;
  name: string;
  description: string;
  href: string;
}

interface cardProps {
  features: featureProps[];
  info: string;
  title: string;
  description: string;
  arrow: string;
}

export default function Card({
  features,
  info,
  title,
  description,
  arrow,
}: cardProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mx-auto max-w-2xl text-center">
          <div className="w-28 mb-3 text-sm font-medium leading-7 text-purple bg-slate-50 border rounded-2xl text-center">
            {info}
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-left lg:text-center">
            {description}
          </p>
        </div>
        {/* Iteración */}
        <div className="grid mx-auto mt-16 max-w-full sm:mt-20 lg:mt-24 place-items-center">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:max-w-none md:grid-cols-3 md:gap-y-16 place-items-center">
            {features.map((feature, i) => (
              <Item
                key={i}
                img={feature.img}
                name={feature.name}
                description={feature.description}
                href={feature.href}
                arrow={arrow}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

interface itemProps {
  key: number;
  img: string | JSX.Element;
  name: string;
  description: string;
  href: string;
  arrow: string;
}

function Item({ img, name, description, href, arrow }: itemProps) {
  return (
    <div className="flex flex-col max-w-[340px] justify-center items-center gap-y-2">
      <div className="flex h-14 w-14 p-2 items-center justify-center rounded-lg bg-white border">
        {typeof img === "string" ? (
          <img src={img} aria-hidden="true" className="text-white" />
        ) : (
          img
        )}
      </div>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        {name}
      </dt>
      <dd className="text-sm text-center leading-7 text-gray-600">
        {description}
      </dd>
      <a
        href={href}
        className="flex gap-x-2 items-center font-medium text-sm text-purple"
      >
        {arrow}
        <ArrowRightIcon className="w-4" />
      </a>
    </div>
  );
}
