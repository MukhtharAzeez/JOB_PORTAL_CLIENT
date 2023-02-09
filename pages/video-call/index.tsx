import React from 'react'
import Notifications from '../../components/Video/Notifications'
import Options from '../../components/Video/Options'
import VideoPlayer from '../../components/Video/VideoPlayer'
import { ContextProvider } from '../../contexts/videoSocketContext'


const index = () => {
    return (
        <ContextProvider>
            <>
                <VideoPlayer />
                <Options>
                    <Notifications />
                </Options>
            </>
        </ContextProvider>
    )
}

export default index
