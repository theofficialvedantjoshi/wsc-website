import Header from "../components/Header";
import Footer from "../components/Footer";

const images = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WorldQuant_Text_Logo_2022.jpg",
        alt: "World Quant"
    },
    {
        src: "https://logowik.com/content/uploads/images/standard-chartered-bank-new-20211713.jpg",
        alt: "Standard Chartered Bank"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Abhibus-icon_%281%29.png",
        alt: "Abhibus"
    },
    {
        src: "https://finception.in/static/images/finshots.png",
        alt: "Finshots"
    },
    {
        src: "https://images.ctfassets.net/vod6xe6bpvx4/5gEuscdx8aVHtTuEfRz8uZ/df24748b8039c4feec18701464406ab4/Lofi-Logo-Bold-White-logo-Blue-BG.png",
        alt: "Lorien Finance"
    },
    {
        src: "https://alphabeta.io/img/transparent_AB_logo.png",
        alt: "Alpha Beta"
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ghodccmk2rs2okw5e19e",
        alt: "On Finance"
    },
    {
        src: "https://www.livelaw.in/h-upload/2023/10/19/750x450_499406-idfc.webp",
        alt: "IDFC"
    }
];

export default function Collabs() {
    return (
        <div class="flex flex-col min-h-screen">
            <Header />
            <div id="home" class="container px-4 mx-[5vw] lg:mx-[16.5vw] md:mx-[16.5vw]">
                <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-28 lg:mt-44 md:mt-44">
                    <div class="text-white">
                        <h1 class="text-3xl lg:text-7xl md:text-4xl font-bold py-1">Our</h1>
                        <h1 class="text-3xl lg:text-7xl md:text-4xl font-bold py-1">Industry</h1>
                        <h1 class="text-3xl lg:text-7xl md:text-4xl font-bold py-1">Collaborations.</h1>
                        <div class="py-2 w-[60vw] lg:w-[45vw] md:w-[55vw]">
                            <p class="text-slate-400 text-md lg:text-2xl md:text-xl">
                                FINANCE | BANKING | CONSULTING | ARTIFICIAL INTELLIGENCE
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 py-10 mb-20 lg:mb-5 md:mb-10 lg:pr-44 md:pr-44">
                    {images.slice(0).map((image, index) => (
                        <div key={index} class="flex items-center animate-fadeIn">
                            <img
                                src={image.src}
                                alt={image.alt}
                                class="w-[120px] h-auto lg:w-[150px] md:w-[100px] filter brightness-90 hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div class="mt-28">
                <Footer />
            </div>
        </div>
    );
}
