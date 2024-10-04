// eslint-disable-next-line react/prop-types
export default function IconUser({user}) {

    // eslint-disable-next-line react/prop-types
    const firstName = user?.firstName[0] || 'Unknown'
    // eslint-disable-next-line react/prop-types
    const lastName = user?.lastName[0] || 'User'

    return (
        <div>
            <div className='profileCircle'>
                 {/* eslint-disable-next-line react/prop-types */}
                <p>{firstName+lastName}</p>
            </div>
        </div>
    )
}