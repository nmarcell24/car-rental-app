import { useMediaQuery } from "@mui/material";
import { Link } from "react-router";

export const NotFound = () => {
    const mobil = useMediaQuery("(max-width: 430px)");
    return (
        <div className="h-screen fixed top-0 z-50 flex bg-[#252425] flex-col items-center justify-center gap-10 bg-[url(./notFound.svg)] bg-no-repeat bg-center text-white">
            <h1 className={mobil ? "text-2xl font-bold" : "text-5xl font-bold" }>Nothing to see here</h1>
            <h4 className={mobil ? "text-md text-[#828282] w-1/2 text-center" : "text-2xl text-[#828282] w-1/2 text-center"} >Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support.</h4>
            <Link to={"/"} className="font-bold">Back to home</Link>
        </div>
    )
}