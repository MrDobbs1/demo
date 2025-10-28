
"use client";

 import { useRouter } from "next/navigation";


export default function Links() {

    const router = useRouter();


return (
<div>
    <h1>Links</h1>
    <button onClick={router.back}>Go Back</button>
</div>
);
}