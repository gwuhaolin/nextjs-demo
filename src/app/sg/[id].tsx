import Link from "next/link";
import React from "react";

// @ts-ignore
export default ({txt}) => {
    return <div>
        <div>
            <Link href="/">Home</Link> |
            <Link href="/antd">Antd Demo</Link> |
            <Link href="/sg">SG Demo</Link> |
            <Link href="/csr">CSR Demo</Link>
        </div>

        静态SG HTML内容: {txt}
    </div>
}

const posts = [
    {
        id: 'a',
        txt: 'aaa123',
    },
    {
        id: 'b',
        txt: 'bbbqe3e1',
    },
]

// 此函数在构建时被调用，列出所有post页面，/post/:id
export async function getStaticPaths() {
    // 调用外部 API 获取博文列表

    // 据博文列表生成所有需要预渲染的路径
    const paths = posts.map((post) => ({
        params: { id: post.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// 在构建时也会被调用，获取单篇post的数据用于预渲染<Post/>
// @ts-ignore
export async function getStaticProps({ params }) {
    // params 包含此片博文的 `id` 信息。
    // 如果路由是 /posts/1，那么 params.id 就是 1
    const p = posts.find((em)=> em.id === params.id)

    // 通过 props 参数向页面传递博文的数据
    return { props: { txt: p?.txt } }
}
