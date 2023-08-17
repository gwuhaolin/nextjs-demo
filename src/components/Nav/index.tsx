import Link from "next/link";
import React from "react";

export default ()=>{
    return <div>
        <Link href="/">Home</Link> |
        <Link href="/antd">Antd Demo</Link> |
        <Link href="/csr">CSR Demo</Link> |
        <Link href="/mix">Mix Demo</Link>
    </div>
}
