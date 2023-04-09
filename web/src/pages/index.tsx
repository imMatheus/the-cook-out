import type { NextPage } from 'next'
import { useFeed } from '@/hooks/useFeed'

const Home: NextPage = () => {
    const { data: posts, isLoading, isError } = useFeed()

    if (isLoading) return <div className='bg-blue-600'>loading...</div>

    if (isError || !posts) return <div className='bg-green-600'>error</div>

    return (
        <div className=''>
            <h1>hej</h1>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </div>
    )
}

export default Home
