
"use client";

import { useRouter } from "next/navigation";

export default function Testimonials() {
     const router = useRouter();


    return ( <div>
        <h1>Testimonials</h1>
        <button onClick={router.back}>Go back</button>
        </div>
        );
}