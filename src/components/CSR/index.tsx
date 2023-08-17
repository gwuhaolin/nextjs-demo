'use client'; // 开启客户端组件模式

import React from "react";

export default () => {
    const [c, setC] = React.useState(0);
    return <h2 onClick={() => {
        setC(c + 1)
    }}>
        客户端组件计数器: {c}
    </h2>
}
