import React from 'react'
import * as jose from 'jose'
import { useEffect, useRef } from 'react'

export default function SignUpGoogle() {

    // let [newUser, response] = useSignUpUserMutation();

    const buttonDiv = useRef(null)
    console.log(buttonDiv.current)

    async function handleCredentialResponse(response) {

        let userObject = jose.decodeJwt(response.credential)
        console.log(userObject)



        let data = {
            name: userObject.name,
            photo: userObject.picture,
            email: userObject.email,
            pass: userObject.sub,
            role: 'user',
            from: 'google'
        }
        // newUser(data)

    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1028505588373-p2o75qn886u82uorrtoniua3h24cb3eb.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'signup'
          });

          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: 'signup_with' }  // customization attributes
          );
    }, [])

  return (
    <div>
        <div ref={buttonDiv}></div>
    </div>
  )
}
