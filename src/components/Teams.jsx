import TeamCard from "./TeamCard"
import { teams, rootPath } from "../data/TeamData"
export default function Teams() {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 gap-x-72 justify-center mx-[25vw] ">
            {teams.map((team) => (
                <TeamCard title={team.title} description={team.description} src={rootPath + team.src} />
            ))}
        </div>
    )
}