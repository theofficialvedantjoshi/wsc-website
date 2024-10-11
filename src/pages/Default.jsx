//404 not found page
import Header from "../components/Header";

export default function Default() {
    return (
        <div class="flex flex-col h-screen text-center">
            <Header />
            <h1 class="text-4xl text-white font-bold mt-28">404 Not Found</h1>
            <p class="text-white mt-4">The page you are looking for does not exist.</p>
        </div>
    )
}