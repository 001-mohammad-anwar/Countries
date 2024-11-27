import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const errormessage = useRouteError();
    const {status , statusText , error , data } = errormessage
    console.log(status , statusText , error , data)
    console.log(errormessage)
  return (
    <div>
      <h1>Something went wrong {status}</h1>
      
    </div>
  )
}

export default ErrorPage
