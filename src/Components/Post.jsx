import Content from './Posts/Content'
import { useState } from 'react'
import MakeComment from './Posts/MakeComment'
import Comments from './Posts/Comments'

// export default function Post ({post, users, posts, setPostas}) {
    // eslint-disable-next-line react/prop-types
export default function Post ({post, users, posts, setPosts}) {
    const [comments, setComments] = useState([])

    return (
        <section>
            <Content post = {post} users = {users}/>
            <hr />
            {/* eslint-disable-next-line react/prop-types */}
            <Comments id={post.id} users={users} comments={comments} setComments={setComments}/>
            {/* eslint-disable-next-line react/prop-types */}
            <MakeComment posts={posts} id={post.id} post={post} setPosts={setPosts} comments={comments} setComments={setComments}/>
        </section>
    )
}