'use client'; // 开启客户端组件模式
import {Button, message, Space} from 'antd';
import React from "react";
import Link from "next/link";

export default () => {
    return <div>
        <div>
            <Link href="/">Home</Link> |
            <Link href="/antd">Antd Demo</Link> |
            <Link href="/sg">SG Demo</Link> |
            <Link href="/csr">CSR Demo</Link>
        </div>

        <Space wrap>
            <Button type="primary" onClick={() => {
                message.info('AAA')
            }}>message info</Button>
        </Space>
    </div>
}
