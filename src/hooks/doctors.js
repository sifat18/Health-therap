import { useEffect, useState } from "react";

const useDoctors = () => {
    const [doctors, setdoctors] = useState([])
    useEffect(() => {
        fetch('/doctors.json').then(res => res.json()).then(data => setdoctors(data))
    }, [])
    return [doctors]
}
export default useDoctors;