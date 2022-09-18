import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignInMutation } from '../features/authAPI'

export default function SignInGoogle() {
    
    const navigate = useNavigate()
    const buttonDiv = useRef(null)
    const [signIn, data] = useSignInMutation()

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        let user = {
            email: userObject.email,
            pass: userObject.sub,
            from: 'google'
        }
        try {
          await signIn(user)
          console.log(data)
          localStorage.setItem('data',JSON.stringify(data))
          navigate("/",{replace:true})
        } catch(error) {
          console.log(error)
        }        
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1028505588373-p2o75qn886u82uorrtoniua3h24cb3eb.apps.googleusercontent.com',
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
