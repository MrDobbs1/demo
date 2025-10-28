
"use client";

import { useRouter } from "next/navigation";


export default function About() {

    const router = useRouter();

    return ( <div>
        <h1>About</h1>
        <button onClick={router.back}>Go back</button>
    </div>
    );
}