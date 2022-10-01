import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import { useSignInMutation } from '../features/authAPI'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/authSlice'
import Alert from './Alert'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const { REACT_APP_ID } = process.env

export default function SignInGoogle() {
    
    const buttonDiv = useRef(null)
    const [signIn] = useSignInMutation()
    const dispatch = useDispatch()

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        let user = {
            email: userObject.email,
            pass: userObject.sub,
            from: 'google'
        }
        try {
            let res = await signIn(user)
            if (res.data?.success) {
                //console.log(res.data)
                toast(<Alert text={res.data.message} />)
                dispatch(setCredentials(res.data.response.user))
                localStorage.setItem('token',res.data.response.token)
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
            context: 'signin'
        })
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: 'signin_with' }  // customization attributes
        );
    }, [])

    return (
        <div ref={buttonDiv}></div>
    )
}
