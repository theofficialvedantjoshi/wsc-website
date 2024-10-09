import { createSignal } from "solid-js";

export default function Footer() {
    const [copied, setCopied] = createSignal(false);
    const logo = "https://i.ibb.co/h8VYGd0/logo.png";

    function copyToClipboard() {
        navigator.clipboard.writeText("wallstreetclub@hyderabad.bits-pilani.ac.in");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <footer id="contact" class="bg-black text-white py-8 mt-10">
            <h1 class="text-white text-3xl font-bold text-center">Contact Us</h1>
            <div class="container mx-auto px-4 mb-5">
                <div class="flex flex-col md:flex-row justify-between items-center text-center">
                    <div class="mb-4 md:mb-0">
                        <img src={logo} alt="Wall Street Club Logo" class="h-16 w-auto" />
                    </div>
                    <div class="flex items-center space-x-6">
                        <a href="https://www.instagram.com/wallstreetclub.bitshyd/" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" class="w-8 h-8 object-cover" />
                        </a>
                        <a href="https://www.linkedin.com/company/wall-street-club/mycompany/" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" class="w-8 h-8 object-cover" />
                        </a>
                        <a href="mailto:wallstreetclub@hyderabad.bits-pilani.ac.in" class="relative hover:opacity-80 transition-opacity">
                            <img src="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png" alt="Gmail" class="w-8 h-8 object-cover" />
                        </a>
                    </div>
                </div>
                <div class="mt-6 text-center text-sm opacity-75 text-white">
                    &copy; 2024 Wall Street Club BITS HYDERABAD™
                </div>
                <div class="mt-6 text-center text-sm opacity-75 text-white">
                    <h1>Made by Vedant Joshi</h1>
                </div>
            </div>
        </footer>
    );
}