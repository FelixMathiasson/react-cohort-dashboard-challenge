import IconUser from './IconUser'
// eslint-disable-next-line react/prop-types
export default function ProfilePage({loggedIn}) {
    return (
        <main className='page'>
            <h2>Profile</h2>
            <section>
                <IconUser user = {loggedIn}/>
            </section>
        </main>
    )
}