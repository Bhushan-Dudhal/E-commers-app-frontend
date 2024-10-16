import React, { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"

export const userReduxStateHook = (navigation,path="login") => {
    const { loading, error, message } = useSelector(state => state.user)
    
    const dispatch =useDispatch()
    useEffect(() => {
    if (error) {
      alert(error)
      dispatch({type:'clearError'})
    }
    
     if (message) {
       alert(message)
       dispatch({ type: 'clearMessage'})
         navigation.reset({
             index: 0,
             routes:[{name:path}]
       })
       
      }
    }, [error, message, dispatch])
    return loading;
}