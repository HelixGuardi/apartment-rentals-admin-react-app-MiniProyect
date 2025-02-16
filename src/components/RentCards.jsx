import axios from "axios";
import { useEffect, useState } from "react";

function RentCards (){
    const [rents, setRents] = useState({});
    useEffect(() => {
        axios.get("http://localhost:5005/api/rents/all")
        .then((response) => {
            setRents(response.data);
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])
    return(
        <div>
            <h3>componente</h3>
        </div>
    )
}
export default RentCards;