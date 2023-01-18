import React from 'react'
import { useRouteError } from 'react-router-dom'
import error_img from '../resources/error.png'

function ErrorPage() {
    const error = useRouteError()
    return (
        <div className='main-container'>
            <div className="err">
                <img src={error_img} alt="" />
                <h1>Oopsies!</h1>
                <p>Sorry, we experienced an error there.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage