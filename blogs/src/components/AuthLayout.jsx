import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
// use effect hi bataega ki humme login me bhejna hai ya sign in me bhejna hai or kis kis feild me change hua hai to mai dubara se checkin kru ya na kruu

useEffect(() => {
    //TODO: make it more easy to understand

    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }
    
    //let authValue = authStatus === true ? true : false

    if(authentication && authStatus !== authentication){
        navigate("/login")
    } else if(!authentication && authStatus !== authentication){
        navigate("/")
    }
    setLoader(false)
}, [authStatus, navigate, authentication])

return loader ? <h1>Loading...</h1> : <>{children}</>
}

