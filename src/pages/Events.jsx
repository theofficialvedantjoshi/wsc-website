import Header from "../components/Header";
import Timeline from "./Timeline";
import Footer from "../components/Footer";
import { rootPath, events } from "../data/EventsData";
export default function Events() {
    return (
        <div className="flex flex-col">
            <Header />
            <h1 className="text-white text-2xl lg:text-4xl mt-28 lg:mt-44 md:mt-30 text-center">Our Flagship Events Conducted Throughout the Year 2023-2024</h1>
            <div className="hidden lg:block">
                <Timeline events={events} />
            </div>
            <div className="lg:hidden flex flex-col space-y-6 p-6 overflow-y-auto">
                {events.map((event, index) => (
                    <div key={index} className="bg-transparent text-white rounded-lg border shadow-lg">
                        <img
                            src={rootPath + event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{event.title}</h2>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div class="mt-28">
                <Footer />
            </div>
        </div>
    );
}
