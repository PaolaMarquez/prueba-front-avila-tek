import Logo from "../.general/Logo";
import data from "./data.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative w-full mt-32">
      <div className="mx-3 lg:mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-3 lg:grid-cols-6 justify-between gap-4 text-sm">
          {data.map(({ title, items }) => (
            <ul key={title} className="gap-y-12">
              <p className="text-black mb-3 font-semibold">{title}</p>
              {items.map((link, i) => (
                <li key={i} className="mb-3">
                  {title !== "Get the app" ? (
                    <a
                      href="#"
                      className="py-1.5 text-purpleButton font-medium transition-colors hover:text-gray-400"
                    >
                      {link}
                    </a>
                  ) : (
                    <img
                      src={link}
                      className="max-w-20 sm:max-w-32 object-cover mb-0"
                    />
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-gray-50 py-8 md:flex-row md:justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <Logo mobileMenuOpen={false} />
            </a>
          </div>
          <p className="mb-4 text-center font-normal text-gray-500 md:mb-0">
            &copy; {currentYear} <a href="#">Untitled UI</a>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
