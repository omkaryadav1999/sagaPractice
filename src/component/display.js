/// display that data;
import React from "react";
import { useSelector } from "react-redux";

function Display() {
    const data = useSelector((state) => state.dataProcessor);
    console.log(data)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Display
