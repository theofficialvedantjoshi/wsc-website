import Header from "../components/Header";
import Timeline from "./Timeline";

const events = [
    {
        image: "https://i.ibb.co/9rqkmTs/analytics.jpg",
        title: "Wall Street Analytics Challenge",
        description: "This is a unique Analytics case competition designed to evaluate participants' analytical and creative skills, along with their proficiency in analytics and Data Science. This exciting case study challenge provides an outstanding opportunity for aspiring data analysts and financial enthusiasts to showcase their expertise in data-driven decision-making and enhance their analytical toolkits.",
        direction: "left",
    },
    {
        image: "https://i.ibb.co/CVvy5Mc/baworkshop.jpg",
        title: "BA Workshop",
        description: "Master Power BI and Advanced Excel with real-world applications in Investment Banking, Venture Capital, and Consulting. The workshop will provide them with a significant edge in their professional journey in data visualization and advanced Excel analysis fields.",
        direction: "right",
    },
    {
        image: "https://i.ibb.co/0fhYQrx/bse.png",
        title: "Bits Stock Exchange",
        description: "A Virtual Stock Trading Challenge as part of ATMOS ‘23 in association with Stock Gro - India’s go-to platform for learning the Art of Trading & Investing.",
        direction: "left",
    },
    {
        image: "https://i.ibb.co/P9X4nfc/equity-research.jpg",
        title: "Equity Research",
        description: "Unleash your creative and analytical prowess by crafting a detailed report of a company of your choice, integrating fundamental and technical analysis. Approach this task with a keen focus on accuracy and depth, delving into the company's financial performance, market position, and growth trajectory. Please find attached below the guidelines for selecting securities and a sample pitch deck to assist you in your preparations.",
        direction: "right",
    },
    {
        image: "https://i.ibb.co/wBJVn9R/wsbc.png",
        title: "WSBC",
        description: "The event is a dynamic two-stage challenge, encompassing a preliminary case and a final presentation. Participants will receive the case, and they will have approximately seven days to craft and submit their solutions. The top-performing teams will be extended an exclusive invitation to present their solutions before a distinguished panel of judges, with winners determined based on the cumulative scores across both rounds.",
        direction: "left",
    }
]

export default function Events() {
    return (
        <div className="flex flex-col">
            <Header />
            <h1 className="text-white text-2xl lg:text-4xl mt-20 lg:mt-44 md:mt-30  text-center">Our Flagship Events</h1>

            {/* Show timeline for large screens */}
            <div className="hidden lg:block">
                <Timeline events={events} />
            </div>

            {/* Scrollable vertical cards for mobile and tablet */}
            <div className="lg:hidden flex flex-col space-y-6 p-6 overflow-y-auto">
                {events.map((event, index) => (
                    <div key={index} className="bg-transparent text-white rounded-lg border shadow-lg">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
