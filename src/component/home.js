import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getdata } from "../services/Action/Action";

function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getdata())
    }, [])
    return (
        <>
            <h1>this is the home page</h1>
        </>
    )
}
export default Home

