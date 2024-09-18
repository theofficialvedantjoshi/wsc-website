import ImageCard from "./ImageCard"
export default function Sessions() {
    const sessions = [
        {
            src: "https://i.ibb.co/9yHTDGr/introtopython.png",
            alt: "Finance Event"
        },
        {
            src: "https://i.ibb.co/gDgRBJy/personal-finance.png",
            alt: "Finance Event"
        },
        {
            src: "https://i.ibb.co/tXDgSkX/financeminor.png",
            alt: "Finance Event"
        }
    ]
    return (
        <div class="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-between mt-15 mx-auto lg:mx-[14.5vw] md:mx-[14.5vw]">
            {sessions.map((session) => (
                <ImageCard src={session.src} alt={session.alt} />
            ))}
        </div>
    )
}