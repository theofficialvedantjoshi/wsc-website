import ImageCard from "./ImageCard"
export default function Sessions() {
    const rootPath = "https://raw.githubusercontent.com/theofficialvedantjoshi/wsc-website/refs/heads/main/src/assets/sessions/";
    const sessions = [
        {
            src: "introtopython.png",
            alt: "Finance Event"
        },
        {
            src: "personal finance.png",
            alt: "Finance Event"
        },
        {
            src: "financeminor.png",
            alt: "Finance Event"
        }
    ]
    return (
        <div class="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-between mt-15 mx-auto lg:mx-[14.5vw] md:mx-[14.5vw]">
            {sessions.map((session) => (
                <ImageCard src={rootPath + session.src} alt={session.alt} />
            ))}
        </div>
    )
}