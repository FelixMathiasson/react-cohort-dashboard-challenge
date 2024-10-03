// eslint-disable-next-line react/prop-types
export default function IconUser({user}) {
    return (
        <div>
            <div className='profileCircle'>
                {/*  eslint-disable-next-line react/prop-types */}
                <p>{user.firstName[0]+user.lastName[0]}</p>
            </div>
        </div>
    )
}