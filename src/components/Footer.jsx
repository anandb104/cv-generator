import github from "./images/github.png";
export default function Header(){
    return (
        <div className="bg-black text-white flex justify-center h-20 items-center text-2xl">
        Created by Anand
        <a href="https://github.com/anandb104">
            <img src={github} className="rounded-[50%] h-10 w-10 bg-white ml-2.5 animate-spin">
            </img>
        </a>
        </div>
    );
}