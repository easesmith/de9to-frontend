import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    const handleNagigate = () => {
        navigate(-1)
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-2xl font-semibold'>Page Not Found.</h1>
            <Button onClick={handleNagigate} variant='link'>Back</Button>
        </div>
    )
}

export default NotFound
