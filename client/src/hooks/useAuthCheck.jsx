import React from 'react'
import {toast} from 'react-toastify'
import {useAuth0} from '@auth0/auth0-react'

const useAuthCheck = () => {
    // check người dùng đã đăng nhập chưa
    const {isAuthenticated} = useAuth0()
    const validateLogin = () => {
      if (!isAuthenticated) {
        toast.error("Bạn phải đăng nhập", {position: "bottom-right"})
        return false
      }else 
        return true
    }
  return (
    {
        validateLogin
    }
  )
}

export default useAuthCheck
