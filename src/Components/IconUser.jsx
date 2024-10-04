// eslint-disable-next-line react/prop-types
export default function IconUser({user}) {

    // eslint-disable-next-line react/prop-types
    const firstName = user?.firstName[0]
    // eslint-disable-next-line react/prop-types
    const lastName = user?.lastName[0] 

    return (
        <div>
            {/*eslint-disable-next-line react/prop-types */}
            <div className='profileCircle' style={{backgroundColor: user.favouriteColour}}>
                 {/* eslint-disable-next-line react/prop-types */}
                <p>{firstName+lastName}</p>
            </div>
        </div>
    )
}