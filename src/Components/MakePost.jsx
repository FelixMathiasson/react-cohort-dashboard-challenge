import { useState } from 'react'
import IconUser from './IconUser'   

// eslint-disable-next-line react/prop-types
export default function MakePost({posts, setPosts, users}) {
    const [newPost, setNewPost] = useState('')
    const [newTitle, setNewTitle] = useState('')

    function ManageSubmission(e) {
        e.preventDefault()
        // eslint-disable-next-line react/prop-types
        const id = posts.length + 1

        
        fetch("https://boolean-uk-api-server.fly.dev/FelixMathiasson/post", {
            method: "POST",
            body: JSON.stringify({
                contactId: 1,
                title: newTitle,
                content: newPost,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }}).then((response) => response.json())

        setPosts([{contactId: 1, title: newTitle, content: newPost, id: id}, ...posts])
        setNewPost('')
        setNewTitle('')
    }
    function ManageChange(e) {
        const { name, value } = e.target
        if(name === 'content') {
            setNewPost(value)
        } else if (name === 'title') {
            setNewTitle(value)
        }
    }

    return (
        <section id='createPost'>
            <IconUser user={users[0]}/>
            <div id='createPostForm'>
                <form id='formPosting' onSubmit={ManageSubmission}>
                    <input type='text' name='title' placeholder="Title" value={newTitle} onChange={ManageChange}/>
                    <div id='onYourMind'>
                        <input type='text' name='content' placeholder="What's on your mind?" value={newPost} onChange={ManageChange}/>
                    </div>
                    <div id='postBtn'>
                      <button id='postPostingButton' type='submit'>Post</button>
                    </div>
                </form>
            </div>
        </section>
    )
}