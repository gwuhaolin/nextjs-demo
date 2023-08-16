import {Button, Pagination, Space, Table, Tooltip} from 'antd';
import React from "react";
import Link from "next/link";

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

export default ()=> {
    return <div>
        <div>
            <Link href="/">Home</Link> |
            <Link href="/antd">Antd Demo</Link> |
            <Link href="/sg">SG Demo</Link> |
            <Link href="/csr">CSR Demo</Link>
        </div>

        <Space wrap>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </Space>
        <Pagination defaultCurrent={1} total={50} />
        <Table dataSource={dataSource} columns={columns} />
        <Tooltip title="prompt text">
            <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
    </div>
}
