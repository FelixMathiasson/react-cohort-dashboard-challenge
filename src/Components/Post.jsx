import Content from './Posts/Content'
//import { useState } from 'react'

// export default function Post ({post, users, posts, setPostas}) {
    // eslint-disable-next-line react/prop-types
export default function Post ({post, users}) {

    //add comments here later (actual post comments, not code comment you genius)

    return (
        <section>
            <Content post = {post} users = {users}/>
            <hr />
            {/* comment stuff down here */}
        </section>
    )
}