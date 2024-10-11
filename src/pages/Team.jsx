import { onMount } from "solid-js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { executives, teamphoto } from "../data/TeamData";
import { linkedIn } from "../data/IconData";
import ParticleBackground from "../components/ParticleBackground";

export default function Team() {

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
            <ParticleBackground />
            <div class="relative z-10">
                <Header />
                <div
                    id="home"
                    class="container px-4 mx-auto flex flex-col items-center mt-28 lg:mt-44 md:mt-44"
                >
                    <div class="text-white text-center">
                        <h1 class="text-3xl lg:text-7xl md:text-4xl font-bold py-1">Our Team</h1>
                    </div>
                    <img
                        src={teamphoto}
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
            </div>
            <div class="mt-28">
                <Footer />
            </div>
        </div>
    );
}