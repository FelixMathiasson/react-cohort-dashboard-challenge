import IconUser from './IconUser'
import { useState, useContext } from 'react'
import { AppContext } from "../App"



// eslint-disable-next-line react/prop-types
export default function ProfilePage({update}) {
    const { loggedIn, setLoggedIn } = useContext(AppContext)
    const {key, setKey} = useState(Date.now())

    const manageSubmission = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact/${loggedIn.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loggedIn)
            })
            if(!response.ok) {
                console.error('Failed to update logged in user!')
            } else {
                update()
                setKey(Date.now())
            }
        } catch(err) {
            console.error('ERROR: ', err)
        }
    }

    const manageText = (e) => {
        setLoggedIn({...loggedIn, [e.target.name]:e.target.value})
    }




    return (
        <>
        <div className="ProfileTop">
            <h2 className="ProfileText">Profile</h2>
        </div>
        <div className="ProfileBottom">
            <div className="ProfileSurvey">
                <div className="ProfileUser">
                    <section>
                        <IconUser user = {loggedIn}/>
                    </section>
                    <h2 className="ProfileName">{loggedIn.firstName} {loggedIn.lastName}</h2>
                </div>
                <section className="FormSection">
                    <form key={key} className="Form" onSubmit={manageSubmission}>
                        <div className="FormContent">
                            <div className="AccountInfo">
                                <h2>Account Info</h2>
                                <label>First Name*
                                    <input type="text" name="firstName" value={loggedIn.firstName} onChange={manageText} required/>
                                </label>
                                <label>Last Name*
                                    <input type="text" name="lastName" value={loggedIn.lastName} onChange={manageText} required/>
                                </label>
                                <label>Gender*
                                    <input type="text" name="gender" value={loggedIn.gender} onChange={manageText} required/>
                                </label>
                                <label>Email*
                                    <input type="text" name="email" value={loggedIn.email} onChange={manageText} required/>
                                </label>
                            </div>
                            <div className="Address">
                                <h2>Address</h2>
                                <label>Street
                                    <input type="text" name="street" value={loggedIn.street} onChange={manageText}/>
                                </label>
                                <label>City
                                    <input type="text" name="city" value={loggedIn.city} onChange={manageText}/>
                                </label>
                            </div>
                        </div>
                        <div className="SubmitButton">
                            <input className="SubmitForm" type="submit" value={"Save"} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
        </>
    )
}