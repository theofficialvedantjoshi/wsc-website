import ImageCard from "./ImageCard"
import { sessions, rootPath } from "../data/SessionData"
export default function Sessions() {
    return (
        <div class="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-between mt-15 mx-auto lg:mx-[14.5vw] md:mx-[14.5vw]">
            {sessions.map((session) => (
                <ImageCard src={rootPath + session.src} alt={session.alt} link={session.link} />
            ))}
        </div>
    )
}