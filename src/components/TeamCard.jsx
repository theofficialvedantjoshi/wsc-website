import ImageCard from "./ImageCard";
export default function TeamCard({ title, description, src }) {
    return (
        <div class="flex flex-col items-center w-[50vw] lg:w-[20vw] md:w-[20vw] h-auto">
            <ImageCard src={src} alt="Team" />
            <h1 class="text-white text-xl lg:text-2xl font-bold pt-10 pb-2">{title}</h1>
            <p class="text-slate-400 text-md lg:text-xl text-center mb-10">{description}</p>
        </div>
    );
}