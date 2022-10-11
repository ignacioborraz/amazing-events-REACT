import { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export default function FileUpload() {
    const [value,setValue] = useState(0)
    const [picture,setPicture] = useState(null)
    const handleUpload = (event)=> {
        const file = event.target.files[0]
        const storageRef = ref(getStorage(), 'events/'+file.name)
        const task = uploadBytesResumable(storageRef, file, { contentType: 'image/png' })
        task.on('state_changed',
            (snapshot) => setValue(100*(snapshot.bytesTransferred/snapshot.totalBytes)),
            (error) => console.log(error.message),
            async () => setPicture(await getDownloadURL(task.snapshot.ref))
        )
    }
    return (
        <>
            <input type='file' onChange={handleUpload}/>
            <input type='hidden' name='file' id={picture}/>
            <progress value={value} max='100' name='file' />
        </>
    )
}