export default function ImageCard({ src, alt, link }) {
    return (
        <div class="flex flex-col items-center w-[50vw] lg:w-[25vw] md:w-[25vw] h-auto">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                    src={src}
                    alt={alt}
                    class="w-[50vw] lg:w-[18vw] md:w-[18vw] h-[50vw] lg:h-[18vw] md:h-[18vw] mt-10 object-cover rounded-lg hover:scale-110 cursor-pointer transition ease-in"
                />
            </a>
        </div>
    );
}