import ImageCard from "./ImageCard"
export default function Sessions() {
    const rootPath = "https://raw.githubusercontent.com/theofficialvedantjoshi/wsc-website/refs/heads/main/src/assets/sessions/";
    const sessions = [
        {
            src: "introtopython.png",
            alt: "Finance Event",
            link: "https://www.instagram.com/p/C_Id_aiP16U/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            src: "personal finance.png",
            alt: "Finance Event",
            link: "https://www.instagram.com/p/C_aiszZSnMm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            src: "financeminor.png",
            alt: "Finance Event",
            link: "https://www.instagram.com/p/C-AoDlGICT0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
    ]
    return (
        <div class="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-between mt-15 mx-auto lg:mx-[14.5vw] md:mx-[14.5vw]">
            {sessions.map((session) => (
                <ImageCard src={rootPath + session.src} alt={session.alt} link={session.link} />
            ))}
        </div>
    )
}