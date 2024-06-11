"use client"

import { useEffect, useState } from "react"


export default function SSR() {
    const [ state, setState ] = useState(undefined);
    useEffect(() => {
        setState('client Loaded');
    }, [])
    return (
        <>
            <div>{state}</div>
        </>
    )
}