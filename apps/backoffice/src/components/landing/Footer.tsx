export default function Footer() {
  const links = [
    {
      title: "Product",
      items: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      items: [
        "Blog",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
    },
    {
      title: "Social",
      items: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dribbble",
      ],
    },
    {
      title: "Legal",
      items: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
    {
      title: "Get the app",
      items: [
        "https://festivaleureka.ca/wp-content/uploads/2024/05/get-it-on-google-play-badge.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png",
      ],
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative w-full">
      <div className="mx-3 lg:mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-3 lg:grid-cols-6 justify-between gap-4 text-sm">
          {links.map(({ title, items }) => (
            <ul key={title} className="gap-y-12">
              <p className="text-black mb-3 font-semibold">{title}</p>
              {items.map((link, i) => (
                <li key={i} className="mb-3">
                  {title !== "Get the app" ? (
                    <a
                      href="#"
                      className="py-1.5 text-purple font-medium transition-colors hover:text-gray-400"
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
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
              <span className="hidden md:flex pl-2 text-base font-medium leading-6 text-gray-900">
                Untitled UI
              </span>
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
