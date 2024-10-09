import { onMount } from "solid-js";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Team() {
    const executives = [
        {
            title: "President",
            name: "Vikhyat Singh",
            src: "https://media.licdn.com/dms/image/v2/D5603AQEywcL_eBq7RA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724357588504?e=1732752000&v=beta&t=o935YSUaqnKW5_uOApajwx-9X9B1zgd0IIfeC18xpfw",
            linkedin: "https://www.linkedin.com/in/vikhyat-singh-a36b3924a/"
        },
        {
            title: "Secretary",
            name: "Aditya Ranjan",
            src: "https://media.licdn.com/dms/image/v2/D4D03AQFZDNiglFHjiQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694441482799?e=1732752000&v=beta&t=uXWOcfrveUfR0dlm7p4Fz-BlCw8FLOYn2WHmDOnvbKc",
            linkedin: "https://www.linkedin.com/in/aditya-ranjan-2a686b272/"
        },
        {
            title: "Technical Head",
            name: "Parth Rathi",
            src: "https://media.licdn.com/dms/image/v2/D4D03AQHGRATJixknOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701104556886?e=1732752000&v=beta&t=EWeOxfD7IbQplAyTAgdt_6M0qqR97v157GK54CgI0OA",
            linkedin: "https://www.linkedin.com/in/parth-rathi-070404231/"
        },
        {
            title: "Treasurer",
            name: "Devang Choudhary",
            src: "https://media.licdn.com/dms/image/v2/D5603AQESHqoDzHvNZQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714657012480?e=1732752000&v=beta&t=zmy9yAYZhmdN8IDYr_EMqwYGmO6YCRzEwkk37T-XgMs",
            linkedin: "https://www.linkedin.com/in/devang-choudhary-712185230/"
        },
        {
            title: "Marketing Head",
            name: "Vedant Joshi",
            src: "https://media.licdn.com/dms/image/v2/D5603AQGuaKMcYD0GIA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727939007191?e=1733961600&v=beta&t=k_EO-_xnlIF9-AVbFyXMBPNGjXNsVPFxmHDVoUKMUc8",
            linkedin: "https://www.linkedin.com/in/vedant-joshi-782452281/"
        }
    ];

    const linkedIn = "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png";

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fadeInUp");
                }
            });
        });

        const elements = document.querySelectorAll(".executive-card");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    });

    const ExecutiveCard = (props) => (
        <div class="executive-card text-white bg-transparent rounded-lg shadow-lg p-6 text-center opacity-0 rounded-md transition-all duration-500 ease-out transform translate-y-8 w-full">
            <img
                src={props.executive.src || "https://via.placeholder.com/150"}
                alt={props.executive.name}
                class="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h2 class="text-xl font-semibold mt-4">{props.executive.name}</h2>
            <p class="text-gray-500">{props.executive.title}</p>
            <a href={props.executive.linkedin} target="_blank" rel="noopener noreferrer" class="inline-block mt-2">
                <img src={linkedIn} alt="LinkedIn" class="w-6 h-6 hover:opacity-80 transition-opacity" />
            </a>
        </div>
    );

    return (
        <div class="flex flex-col min-h-screen">
            <Header />
            <div
                id="home"
                class="container px-4 mx-auto flex flex-col items-center mt-28 lg:mt-44 md:mt-44"
            >
                <div class="text-white text-center">
                    <h1 class="text-3xl lg:text-7xl md:text-4xl font-bold py-1">Our Team</h1>
                </div>
                <img
                    src="https://raw.githubusercontent.com/theofficialvedantjoshi/wsc-website/refs/heads/main/src/assets/team.png"
                    alt="Team"
                    class="w-full lg:w-1/2 md:w-2/3 h-auto mt-8 rounded-lg"
                />
                <div class="text-white text-center">
                    <h1 class="text-3xl lg:text-5xl md:text-4xl font-bold py-20">Executives 2024/25</h1>
                </div>

                {/* Grid container */}
                <div class="w-full my-12">
                    {/* Top row */}
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                        {executives.slice(0, 3).map((executive) => (
                            <ExecutiveCard executive={executive} />
                        ))}
                    </div>
                    {/* Bottom row */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl mx-auto">
                        {executives.slice(3, 5).map((executive) => (
                            <ExecutiveCard executive={executive} />
                        ))}
                    </div>
                </div>
            </div>
            <div class="mt-28">
                <Footer />
            </div>
        </div>
    );
}