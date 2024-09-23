import TeamCard from "./TeamCard"
export default function Teams() {
    const rootPath = "https://raw.githubusercontent.com/theofficialvedantjoshi/wsc-website/refs/heads/main/src/assets/teams/";
    const teams = [
        {
            title: "Core",
            description: "The driving force behind club operations, ensuring seamless execution.",
            src: "core.jpg"
        },
        {
            title: "Quant & Analytics",
            description: "Master data analysis and quantitative techniques in the world of finance.",
            src: "quant.jpg"
        },
        {
            title: "Editorial",
            description: "Shape financial discourse through insightful content creation and communication.",
            src: "editorial.jpg"
        },
        {
            title: "Design",
            description: "Infuse creativity by crafting visually appealing materials and branding.",
            src: "design.jpg"
        }
    ]
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center gap-x-72 mt-10 mx-auto">
            {teams.map((team) => (
                <TeamCard title={team.title} description={team.description} src={rootPath + team.src} />
            ))}
        </div>
    )
}