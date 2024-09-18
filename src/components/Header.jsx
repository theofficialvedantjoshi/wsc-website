import { createSignal } from "solid-js";
import { onMount } from "solid-js";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/#events" },
    { name: "Teams", href: "/#teams" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const [isOpen, setIsOpen] = createSignal(false);
  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  let body;
  let header;
  let mbnav;
  const syncHeaderWithBody = () => {
    const bodyBgColor = window.getComputedStyle(body).backgroundColor;
    if (header && isOpen()) {
      header.style.backgroundColor = "rgb(0, 0, 0)";
    }
    if (header && !isOpen()) {
      header.style.backgroundColor = bodyBgColor;
    }
    requestAnimationFrame(syncHeaderWithBody);
  };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsOpen(false);
    }
  };
  onMount(() => {
    body = document.querySelector("body");
    header = document.querySelector("header");
    syncHeaderWithBody();
    window.addEventListener("scroll", handleScroll);
  });


  return (
    <header class="fixed w-full z-50 backdrop-blur-sm">
      <nav class="flex items-center justify-between py-4 px-8 w-full overflow-x-hidden">
        <div class="flex items-center lg:ml-[16.5vw] md:ml-[16.5vw]">
          <a href="/">
            <img class="w-[20vw] lg:w-[6vw] min-w-[7.5vw]" src="https://i.ibb.co/h8VYGd0/logo.png" alt="Wall Street Club Logo" />
          </a>
        </div>
        <div class="lg:hidden md:hidden">
          <button
            class="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d={!isOpen() ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex md:flex items-center text-white text-lg font-medium lg:mr-[40vw] md:mr-[60vw]">
          <ul class="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  class="hover:text-gray-300"
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {isOpen() && (
          <div class="bg-black lg:hidden fixed top-0 left-1/2 transform -translate-x-1/2 w-full mt-20">
            <ul class="flex flex-col items-center divide-y divide-gray-300">
              {navLinks.map((link) => (
                <li key={link.name} class="w-full">
                  <a
                    href={link.href}
                    class="text-white text-lg hover:text-gray-300 transition-colors duration-300 block text-center py-4"
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        )}
      </nav>
    </header>
  );
};

export default Header;
