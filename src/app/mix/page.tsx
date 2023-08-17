import React from "react";
import Nav from "@/components/Nav";
import CSR from "@/components/CSR";

async function getData() {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('hello, nextjs')
        }, 1000)
    })
}

export default async () => {
    const data = await getData();
    return <div>
        <Nav/>
        <h1>服务端渲染内容: {data}</h1>
        <CSR/>
    </div>
}
