import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignUpMutation } from '../features/authAPI'
import Alert from './Alert'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const { REACT_APP_ID } = process.env

export default function SignUpGoogle() {

    const navigate = useNavigate()
    const buttonDiv = useRef(null)
    const [signUp] = useSignUpMutation()

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        let user = {
            name: userObject.name,
            photo: userObject.picture,
            email: userObject.email,
            pass: userObject.sub,
            role: 'user',
            from: 'google'
        }
        try {
            let res = await signUp(user)
            if (res.data?.success) {
                //console.log(res.data)
                navigate("/signin",{replace:true})
                toast(<Alert text={res.data.message} />)
            } else {
                console.log(res.error)
                toast(<Alert text={res.error.data.message} />)
            }
        } catch(error) {
            console.log(error)
        }        
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: REACT_APP_ID,
            callback: handleCredentialResponse,
            context: 'signup'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: 'signup_with' }
        );
    }, [])

    return (
        <div ref={buttonDiv}></div>
    )

}
