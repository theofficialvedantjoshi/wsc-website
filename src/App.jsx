import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Teams from "./components/Teams";
import Sessions from "./components/Sessions";
import Footer from "./components/Footer";

export default function App() {

  const rootPath = "https://raw.githubusercontent.com/theofficialvedantjoshi/wsc-website/refs/heads/main/src/assets/events/";

  const events = [
    {
      src: "analytics.png",
      alt: "WSAC",
      link: "https://www.instagram.com/p/Cy0pEp0v964/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      src: "baworkshop.jpg",
      alt: "BA Workshop",
      link: "https://www.instagram.com/p/Cyp4zJXvhli/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      src: "bse.png",
      alt: "Bits Stock Exchange",
      link: "https://www.instagram.com/p/CyyLOodvNqM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "equity_research.jpg",
      alt: "Equity Research",
      link: "https://www.instagram.com/p/C5k4AEGvvib/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      src: "stock.png",
      alt: "Unlocking the Stock Market",
      link: "https://www.instagram.com/p/C5h-0vRP-FR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      src: "wsbc.png",
      alt: "WSBC",
      link: "https://www.instagram.com/p/Cy2gUecvzKp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    }
  ]

  return (
    <div class="flex flex-col">
      <Header />
      <div id="home" class="container px-4 mx-[5vw] lg:mx-[16.5vw] md:mx-[16.5vw]">
        <h1 class="text-white text-3xl lg:text-7xl md:text-4xl font-bold  mt-28 lg:mt-56 md:mt-56 py-1">The biggest</h1>
        <h1 class="text-white text-3xl lg:text-7xl md:text-4xl font-bold py-1">finance club of</h1>
        <h1 class="text-white text-3xl lg:text-7xl md:text-4xl font-bold py-1">BITS Hyderabad.</h1>
        <div class="py-2 w-[60vw] lg:w-[35vw] md:w-[55vw] ">
          <p class="text-slate-400 text-md lg:text-2xl md:text-xl">The Wall Street Club is the Finance and Management Club of BITS Pilani, Hyderabad. Comprised of students exploring their passion in finance, the club is ever-aspiring of excellence and integrity.</p>
        </div>
      </div>
      <div id="events" class="container px-4 mx-[5vw] lg:mx-[16.5vw] md:mx-[16.5vw] mt-15 lg:mt-56">
        <h2 class="text-white text-2xl lg:text-5xl md:text-3xl font-bold pt-10 pb-2 lg:mt-28">Events.</h2>
        <p class="text-slate-400 text-md lg:text-2xl md:text-xl">Our Flagship Events - ATMOS 2023</p>
      </div>
      <div class="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-between mt-15 mx-auto lg:mx-[14.5vw] md:mx-[14.5vw]">
        {events.slice(0, 3).map((event) => (
          <ImageCard src={rootPath + event.src} alt={event.alt} link={event.link} />
        ))}
      </div>
      <div class="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-between mt-15 mx-auto lg:mx-[14.5vw] md:mx-[14.5vw]">
        {events.slice(3, 6).map((event) => (
          <ImageCard src={rootPath + event.src} alt={event.alt} />
        ))}
      </div>
      <div id="teams" class="container px-4 mx-[5vw] lg:mx-[16.5vw] md:mx-[16.5vw] mt-20">
        <h2 class="text-white text-2xl lg:text-5xl md:text-3xl font-bold pt-10 pb-2">Teams.</h2>
        <p class="text-slate-400 text-md lg:text-2xl md:text-xl">Our Teams</p>
      </div>
      <Teams />
      <div id="about" class="container px-4 mx-[5vw] lg:mx-[16.5vw] md:mx-[16.5vw] mt-15">
        <h2 class="text-white text-2xl lg:text-5xl md:text-3xl font-bold pt-10 pb-2">Sessions.</h2>
        <p class="text-slate-400 text-md lg:text-2xl md:text-xl">Sessions conducted for the GB 2024/25</p>
      </div>
      <Sessions />
      <Footer />
    </div>
  );
}
