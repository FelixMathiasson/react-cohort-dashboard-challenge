import Post from './Post'
import MakePost from './MakePost'

// eslint-disable-next-line react/prop-types
export default function Homepage({users, posts, setPosts}) {
    return (
        <main className='page'>
            <MakePost posts = {posts} setPosts={setPosts}  users = {users}/>
            {/* eslint-disable-next-line react/prop-types */}
            {posts.map(p => <Post key = {p.id} post = {p} posts={posts} setPosts = {setPosts} users = {users}/>)}
        </main>
    )
}