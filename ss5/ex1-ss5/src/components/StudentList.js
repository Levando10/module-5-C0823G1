import {useParams} from "react-router-dom";

export function StudentList(){
    const param = useParams();
    return (
        <h1>Edit student with param  {param.id}</h1>
    )
}