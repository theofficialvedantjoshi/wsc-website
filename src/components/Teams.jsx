import TeamCard from "./TeamCard"
export default function Teams() {
    const teams = [
        {
            title: "Core",
            description: "The driving force behind club operations, ensuring seamless execution.",
            src: "/src/assets/teams/core.jpg"
        },
        {
            title: "Quant & Analytics",
            description: "Master data analysis and quantitative techniques in the world of finance.",
            src: "/src/assets/teams/quant.jpg"
        },
        {
            title: "Editorial",
            description: "Shape financial discourse through insightful content creation and communication.",
            src: "/src/assets/teams/editorial.jpg"
        },
        {
            title: "Design",
            description: "Infuse creativity by crafting visually appealing materials and branding.",
            src: "/src/assets/teams/design.jpg"
        }
    ]
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center gap-x-72 mt-10 mx-auto">
            {teams.map((team) => (
                <TeamCard title={team.title} description={team.description} src={team.src} />
            ))}
        </div>
    )
}