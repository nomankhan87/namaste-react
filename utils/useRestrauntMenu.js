import { useEffect, useState } from "react";
import { MENAPI } from "./constanst";

const useRestrauntMenu = (resId) => {

    const [restauraunt ,setRestauraunt] = useState(null)

    useEffect(() => {
        fetchMenu();
    }, []) 


    const fetchMenu = async () => {
        const data = await fetch(MENAPI + resId);
        const json = await data.json();
        setRestauraunt(json.data);

    }
    return restauraunt;

}

export default useRestrauntMenu;