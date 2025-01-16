import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
export default function Report() {
    return (
        <div class="flex flex-col min-h-screen">
            <ParticleBackground />
            <div class="relative z-10">
                <Header />
                <div class="container px-4 mx-auto text-center mt-28">
                    <h2 class="text-white text-1xl lg:text-3xl md:text-2xl font-bold pt-10 pb-2">Quantitative Finance Report 2023/24</h2>
                    <div class="w-full mt-8">
                        <iframe src="/report.pdf"
                            class="w-full h-[500px] lg:h-[800px] border rounded-md"
                            title="Quantitative Finance Report">
                        </iframe>
                    </div>
                </div>
            </div>
            <div class="mt-auto">
                <Footer />
            </div>
        </div>
    )
}