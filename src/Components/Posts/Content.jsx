import { Link } from 'react-router-dom'
import IconUser from '../IconUser'

// eslint-disable-next-line react/prop-types
export default function Content({post, users}) {


    // eslint-disable-next-line react/prop-types
    let user = users.find(user => user.id === post.contactId) 

    
    const firstName = user?.firstName[0] || 'Unknown'
    const lastName = user?.lastName[0] || 'User'
    return (
        <div className='postContents'>
            <IconUser user={user} className='icon'/>
            <div className='postTitle'>
                <h3>{firstName + ' ' + lastName}</h3>
                 {/* eslint-disable-next-line react/prop-types */}
                <h4><Link to ={`/post/${post.id}`}>{post.title}</Link></h4>
            </div>
             {/* eslint-disable-next-line react/prop-types */}
            <p className='postText'>{post.content}</p>
        </div>
    )
}