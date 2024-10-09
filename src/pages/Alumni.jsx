import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Alumni() {
    const alumni = [
        {
            name: "Rashmit Chauhan",
            company: "Nomura",
            domain: "Quantitative Investment Strategies",
            image: "https://media.licdn.com/dms/image/v2/D5603AQHCT9TkPJC2Sg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685460845112?e=1733961600&v=beta&t=wRhwXFID6tpQpY17ExRjjwWsYBrMJpN8KVBvtbQisEY"
        },
        {
            name: "Sohum Muley",
            company: "QuantX",
            domain: "Quantitative Research",
            image: "https://media.licdn.com/dms/image/v2/D5603AQGoqTU9iAg82A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695200481484?e=1733961600&v=beta&t=SzivDyUhaRHJ2cXWizQcmmol8cXUTCoCbXVgcG6NAHs"
        },
        {
            name: "Nihar Rathi",
            company: "Nomura, Waterfield Advisors",
            domain: "Management",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQGnwJijXmVlAw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702556943550?e=1733961600&v=beta&t=h8xUqz4B1LnF0ucvAaoVr-lepQKAwBIcL6dumrPMrTI"
        },
        {
            name: "Gorang Agarwal",
            company: "Rupify",
            domain: "Growth Management",
            image: "https://media.licdn.com/dms/image/v2/C4E03AQHQh0xPv-QlhA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1608396925765?e=1733961600&v=beta&t=92ughZqYx1G-WMwv5RAHKJMXT-lOiuhP6XnkJvLFYjg"
        },
        {
            name: "Pranav Sistla",
            company: "Samsung, Zee",
            domain: "ML and Data Science",
            image: "https://media.licdn.com/dms/image/v2/D5603AQHF92icv0naYA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722807583908?e=1733961600&v=beta&t=S2mI9QwiwMTRR-P8M2SIYRH2JOjgml8r__1-ToRfkXA"
        },
        {
            name: "Mani Venkat",
            company: "JP Morgan",
            domain: "Strategy and Analytics",
            image: "https://media.licdn.com/dms/image/v2/C4D03AQEzgyocNfC1HA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657296314597?e=1733961600&v=beta&t=d_iW94TmhOgNUdrHLc6JaKByDdwbXPViVa6QJfUj2jo"
        },
        {
            name: "Ninaad Thakkar",
            company: "Nomura",
            domain: "Analytics",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQE9gO6XHjKGoQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713450567719?e=1733961600&v=beta&t=tuNKn4ksyp4VEgvLfB6ZYbJEMZtVUeqN1PwZUhC5CAE"
        },
        {
            name: "Aryan Basantani",
            company: "JP Morgan",
            domain: "Credit Risk and Analytics",
            image: "https://media.licdn.com/dms/image/v2/C5603AQHfg9A4bJLOIQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659442374508?e=1733961600&v=beta&t=Vys77rOdRQ2B0oUybGYEidXEvmWGLMOYiC8vvmVwLnY"
        },
        {
            name: "Siddhartha Gupta",
            company: "JP Morgan",
            domain: "Equity Research and Analytics",
            image: "https://media.licdn.com/dms/image/v2/C4E03AQGVmBXnJsughA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592381760288?e=1733961600&v=beta&t=coS9ktBithMpb8puDBZE3vzqNQGEjquI9A2qmsW1Zdw"
        },
        {
            name: "Siddharth Ratnam",
            company: "Nomura",
            domain: "Analytics",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQGPSbeX8mXqtw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706637013806?e=1733961600&v=beta&t=vnCxR_kBOc-ijxPZjHoSo_JYEYb2A8JYMwft-cbx4lI"
        },
    ]
    const alumniData = alumni;
    return (
        <div class="flex flex-col">
            <Header />
            <h1 className="text-white text-2xl lg:text-5xl mt-20 lg:mt-44 md:mt-30 font-bold text-center">
                Our Notable Alumni
            </h1>
            <div className="container mx-auto px-4 mt-16">
                {/* First Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                    {alumniData.slice(0, 5).map((alumni) => (
                        <div className="bg-transparent rounded-lg shadow-lg p-4" key={alumni.name}>
                            <img
                                src={alumni.image}
                                alt={alumni.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-white text-center">
                                {alumni.name}
                            </h3>
                            <p className="text-gray-300 text-center">{alumni.company}</p>
                            <p className="text-gray-400 text-center">{alumni.domain}</p>
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {alumniData.slice(5, 10).map((alumni) => (
                        <div className="bg-transparent rounded-lg shadow-lg p-4" key={alumni.name}>
                            <img
                                src={alumni.image}
                                alt={alumni.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-white text-center">
                                {alumni.name}
                            </h3>
                            <p className="text-gray-300 text-center">{alumni.company}</p>
                            <p className="text-gray-400 text-center">{alumni.domain}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div class="mt-28">
                <Footer />
            </div>

        </div>
    )
}