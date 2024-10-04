import IconUser from '../IconUser'

// eslint-disable-next-line react/prop-types
export default function Comment ({comment, users}) {
    // eslint-disable-next-line react/prop-types
    let user = users.find(u => u.id === comment.contactId)

    return (
        <div className ='comment'>
            <IconUser user ={user}/>
            <div className='commentText'>
                <p className='bold'>{user.firstName + ' ' + user.lastName}</p>
                 {/* eslint-disable-next-line react/prop-types */}
                <p>{comment.content}</p>
            </div>
        </div>
    )
}