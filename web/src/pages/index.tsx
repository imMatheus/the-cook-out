import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import type { NextPage } from 'next'
import type { Post } from '../types'

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
    props
) => {
    return (
        <div className='bg-primary'>
            <h1>hej</h1>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps<{
    posts: Post[]
}> = async (context) => {
    const res = await fetch('http://localhost:4000/posts')
    const posts: Post[] = await res.json()

    return {
        props: {
            posts,
        },
    }
}
