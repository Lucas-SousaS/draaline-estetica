import { Link } from "react-router";
import style from "./Links.module.css"

function Links({ url, Title }) {
    return (
        <div className={`flex flex-col ${style.box}`}>
            <Link className="font-medium" to={`/${url}`}>{Title}</Link>
            <div className={`${style.barra}`} >
            </div>
        </div>
    );
}

export default Links;