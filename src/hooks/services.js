import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('/services.json').then(res => res.json()).then(data => setservices(data))
    }, [])
    return [services]
}
export default useServices;