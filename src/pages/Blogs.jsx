import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Blogs() {
    return (
        <div class="flex flex-col min-h-screen">
            <Header />
            <div class="container px-4 mx-auto lg:mx-[16.5vw] md:mx-[16.5vw] mt-28">
                <h2 class="text-white text-2xl lg:text-5xl md:text-3xl font-bold pt-10 pb-2">COMING SOON</h2>
            </div>
            <div class="mt-auto">
                <Footer />
            </div>
        </div>
    )
}