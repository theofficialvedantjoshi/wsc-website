import ImageCard from "./ImageCard"
export default function Sessions() {
    const sessions = [
        {
            src: "/src/assets/sessions/introtopython.png",
            alt: "Finance Event"
        },
        {
            src: "/src/assets/sessions/personal finance.png",
            alt: "Finance Event"
        },
        {
            src: "/src/assets/sessions/financeminor.png",
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