import { useParams } from "react-router-dom"

export default function User(){

    const {userid} = useParams();

    return (
        <>
            <h1>USERS: {userid}</h1>
        </>
    )
}