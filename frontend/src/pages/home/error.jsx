import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <div>
            <h1>404 error</h1>
            <Link to='/' className="text-[15px] flex justify-start m-2">BACK HOME</Link>
        </div>
    )
}