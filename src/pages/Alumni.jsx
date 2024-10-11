import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import { alumni } from "../data/AlumniData";
export default function Alumni() {
    return (
        <div class="flex flex-col">
            <ParticleBackground />
            <div class="relative z-10">
                <Header />
                <h1 className="text-white text-2xl lg:text-5xl mt-20 lg:mt-44 md:mt-30 font-bold text-center">
                    Our Notable Alumni
                </h1>
                <div className="container mx-auto px-4 mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                        {alumni.slice(0, 5).map((alumni) => (
                            <div className="bg-transparent rounded-lg shadow-lg p-4" key={alumni.name}>
                                <img
                                    src={alumni.image}
                                    alt={alumni.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-white text-center">
                                    {alumni.name}
                                </h3>
                                <p className="text-gray-300 text-center">{alumni.company}</p>
                                <p className="text-gray-400 text-center">{alumni.domain}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {alumni.slice(5, 10).map((alumni) => (
                            <div className="bg-transparent rounded-lg shadow-lg p-4" key={alumni.name}>
                                <img
                                    src={alumni.image}
                                    alt={alumni.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-white text-center">
                                    {alumni.name}
                                </h3>
                                <p className="text-gray-300 text-center">{alumni.company}</p>
                                <p className="text-gray-400 text-center">{alumni.domain}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="mt-28">
                    <Footer />
                </div>
            </div>
        </div>
    )
}