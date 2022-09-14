import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import axios from 'axios'
import apiUrl from '../url'

export default function SignInGoogle() {

    const buttonDiv = useRef(null)

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)
        console.log(userObject)
        let data = {
            email: userObject.email,
            pass: userObject.sub,
            from: 'google'
        }
        try {
          let response = await axios.post(apiUrl+'auth/signin',data)
          console.log(response)
          localStorage.setItem('user',JSON.stringify(response.data.response.user))
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
