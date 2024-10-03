import { useParams } from 'react-router-dom'
import Post from './Post'

// eslint-disable-next-line react/prop-types
export default function PostView({users, posts, setPosts}) {
    const urls = useParams()

    // eslint-disable-next-line react/prop-types
    let post = posts.find(post => post.id === Number(urls.id))

    return (
        <main className='viewPage'>
            <Post users= {users} posts = {posts} setPosts = {setPosts} post = {post} />
        </main>
    )
}