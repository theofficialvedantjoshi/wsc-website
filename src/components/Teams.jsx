import TeamCard from "./TeamCard"
export default function Teams() {
    const teams = [
        {
            title: "Core",
            description: "The driving force behind club operations, ensuring seamless execution.",
            src: "https://i.ibb.co/GFtd1RP/core.jpg"
        },
        {
            title: "Quant & Analytics",
            description: "Master data analysis and quantitative techniques in the world of finance.",
            src: "https://i.ibb.co/pjcrf7L/quant.jpg"
        },
        {
            title: "Editorial",
            description: "Shape financial discourse through insightful content creation and communication.",
            src: "https://i.ibb.co/n8v7ZGt/editorial.jpg"
        },
        {
            title: "Design",
            description: "Infuse creativity by crafting visually appealing materials and branding.",
            src: "https://i.ibb.co/QvjF9Gk/design.jpg"
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