"use client";

import { useRouter } from "next.navigation";

const router = useRouter();

export default function Emergency() {
    return ( <div>
        <h1>Emergency</h1>
        <button onclick={router.back}>Go back</button>
        </div>
        );
}