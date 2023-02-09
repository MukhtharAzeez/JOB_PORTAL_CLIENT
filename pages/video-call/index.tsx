import React from 'react'
import VideoPlayer from '../../components/Video/VideoPlayer'
import { ContextProvider } from '../../contexts/videoSocketContext'


const index = () => {
    return (
        <ContextProvider>
            <div className=" bg-black">
                <VideoPlayer />
            </div>
        </ContextProvider>
    )
}

export default index
