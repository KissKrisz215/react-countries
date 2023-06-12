import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function ProjectDetailPage(){

    const {id} = useParams();
    console.log("ID:",id);

    return(
        <div>
        <Navbar />

        </div>
    );
}