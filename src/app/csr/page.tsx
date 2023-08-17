'use client'; // 开启客户端组件模式
import {Button, message, Space} from 'antd';
import React from "react";
import Nav from "@/components/Nav";

export default () => {
    return <div>
        <Nav/>

        <Space wrap>
            <Button type="primary" onClick={() => {
                message.info('AAA')
            }}>message info</Button>
        </Space>
    </div>
}
