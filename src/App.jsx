import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Teams from "./components/Teams";
import Sessions from "./components/Sessions";
import Footer from "./components/Footer";

export default function App() {

  const events = [
    {
      src: "https://i.ibb.co/9rqkmTs/analytics.jpg",
      alt: "WSAC"
    },
    {
      src: "https://i.ibb.co/CVvy5Mc/baworkshop.jpg",
      alt: "BA Workshop"
    },
    {
      src: "https://i.ibb.co/0fhYQrx/bse.png",
      alt: "Bits Stock Exchange"
    },
    {
      src: "https://i.ibb.co/P9X4nfc/equity-research.jpg",
      alt: "Equity Research"
    },
    {
      src: "https://i.ibb.co/vBNG74k/stock.png",
      alt: "Unlocking the Stock Market"
    },
    {
      src: "https://i.ibb.co/wBJVn9R/wsbc.png",
      alt: "WSBC"
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
        <h2 class="text-white text-2xl lg:text-5xl md:text-3xl font-bold pt-10 pb-2">Events.</h2>
        <p class="text-slate-400 text-md lg:text-2xl md:text-xl">Our Flagship Events</p>
      </div>
      <div class="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-between mt-15 mx-auto lg:mx-[14.5vw] md:mx-[14.5vw]">
        {events.slice(0, 3).map((event) => (
          <ImageCard src={event.src} alt={event.alt} />
        ))}
      </div>
      <div class="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-between mt-15 mx-auto lg:mx-[14.5vw] md:mx-[14.5vw]">
        {events.slice(3, 6).map((event) => (
          <ImageCard src={event.src} alt={event.alt} />
        ))}
      </div>
      <div id="teams" class="container px-4 mx-[5vw] lg:mx-[16.5vw] md:mx-[16.5vw] mt-20">
        <h2 class="text-white text-2xl lg:text-5xl md:text-3xl font-bold pt-10 pb-2">Teams.</h2>
        <p class="text-slate-400 text-md lg:text-2xl md:text-xl">Our Teams</p>
      </div>
      <Teams />
      <div id="about" class="container px-4 mx-[5vw] lg:mx-[16.5vw] md:mx-[16.5vw] mt-15">
        <h2 class="text-white text-2xl lg:text-5xl md:text-3xl font-bold pt-10 pb-2">Sessions.</h2>
        <p class="text-slate-400 text-md lg:text-2xl md:text-xl">Sessions conducted for the GB</p>
      </div>
      <Sessions />
      <Footer />
    </div>
  );
}
