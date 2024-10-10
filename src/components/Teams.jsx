import TeamCard from "./TeamCard"
import { teams, rootPath } from "../data/TeamData"
export default function Teams() {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center gap-x-72 mt-10 mx-auto">
            {teams.map((team) => (
                <TeamCard title={team.title} description={team.description} src={rootPath + team.src} />
            ))}
        </div>
    )
}