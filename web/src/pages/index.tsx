import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import type { NextPage } from 'next'
import type { Post } from '../types'
import { getFeed, useFeed } from '@/hooks/useFeed'
import { axios } from '@/utils/axios'

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
    props
) => {
    const {
        data: posts,
        isLoading,
        isError,
    } = useFeed({ initialData: props.posts })

    console.log('hej g')
    console.log(posts)

    if (isLoading && !posts)
        return <div className='bg-blue-600'>loading...</div>

    if (isError && !posts) return <div className='bg-green-600'>error</div>

    return (
        <div className='bg-primary'>
            <h1>hej</h1>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps<{
    posts: Post[]
}> = async () => {
    const posts = await getFeed()

    return {
        props: {
            posts,
        },
    }
}
