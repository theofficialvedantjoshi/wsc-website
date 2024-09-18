import { createSignal } from "solid-js";

export default function Socials() {
    const [copied, setCopied] = createSignal(false);

    function copyToClipboard() {
        navigator.clipboard.writeText("wallstreetclub@hyderabad.bits-pilani.ac.in");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div class="relative flex flex-row justify-evenly">
            <a href="https://www.instagram.com/wallstreetclub.bitshyd/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" class="w-[10vw] h-[10vw] lg:w-[4vw] lg:h-[4vw] mt-10 object-cover rounded-lg hover:scale-110 cursor-pointer transition ease-in" />
            </a>
            <a href="https://www.linkedin.com/company/wall-street-club/mycompany/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" class="w-[10vw] h-[10vw] lg:w-[4vw] lg:h-[4vw] mt-10 object-cover rounded-lg hover:scale-110 cursor-pointer transition ease-in" />
            </a>
            <button onClick={copyToClipboard} class="relative">
                <img src="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png" alt="Gmail" class="w-[12vw] h-[12vw] lg:w-[4vw] lg:h-[4vw] pb-3 mt-10 object-cover rounded-lg hover:scale-110 cursor-pointer transition ease-in" />
                {copied() && (
                    <div class="absolute top-[-2rem] right-[-1rem] bg-transparent text-white py-2 px-3 rounded-lg text-sm lg:text-base animate-fade-in-out">
                        Copied to clipboard!
                    </div>
                )}
            </button>
        </div>
    );
}
