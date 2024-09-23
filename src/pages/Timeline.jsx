import { onMount } from "solid-js";

const Circle = () => {
    return (
        <div className="rounded-full w-6 h-6 bg-white mx-auto mt-7"></div>
    );
};

const Pillar = () => {
    return (
        <div className="rounded-t-full rounded-b-full w-2 h-full bg-white mx-auto my-2"></div>
    );
};

const rootPath = "https://raw.githubusercontent.com/theofficialvedantjoshi/wsc-website/refs/heads/main/src/assets/events/";

const EventCard = ({ image, title, description, direction }) => {
    let cardRef;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        cardRef.classList.add("animate");
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(cardRef);
    });

    return (
        <div
            ref={cardRef}
            className={`flex flex-row gap-6 border shadow-lg rounded-xl p-6 bg-transparent transition-all duration-700 ease-in-out opacity-0 transform translate-y-8 ${direction === "left" ? "slide-left ml-8 mr-auto" : "slide-right mr-8 ml-auto"
                }`}
        >
            <div className="flex-none">
                <img
                    src={rootPath + image}
                    alt="Event"
                    className="w-48 h-48 rounded-md object-cover"
                />
            </div>
            <div className="flex flex-col justify-center text-left">
                <h1 className="text-white text-2xl font-bold">{title}</h1>
                <p className="text-white text-md mt-4">{description}</p>
            </div>
        </div>
    );
};

export default function Timeline({ events }) {
    return (
        <div className="flex flex-col gap-y-8 w-full my-10">
            <Circle />

            {events.map((event, key) => (
                <div key={key}>
                    <div className="grid grid-cols-[1fr,auto,1fr] gap-x-6 items-center mx-auto">
                        {event.direction === "left" ? (
                            <EventCard
                                image={event.image}
                                title={event.title}
                                description={event.description}
                                direction="left"
                            />
                        ) : (
                            <div></div>
                        )}
                        <Pillar />
                        {event.direction === "right" ? (
                            <EventCard
                                image={event.image}
                                title={event.title}
                                description={event.description}
                                direction="right"
                            />
                        ) : (
                            <div></div>
                        )}
                    </div>
                    {key !== events.length - 1 && <Circle />}
                </div>
            ))}
        </div>
    );
}
