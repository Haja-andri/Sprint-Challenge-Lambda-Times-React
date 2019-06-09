import React from "react"

export default function Logout(){
    const callLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return(
        <span
        onClick = {callLogout}
        >Logout</span>
    )
}