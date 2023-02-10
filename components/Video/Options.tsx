import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { VideoSocketContext } from '../../contexts/videoSocketContext';
import { useRouter } from 'next/router';
import { currentCompanyAdmin } from '../../redux/company-admin/CompanyAdminAuthSlicer';
import { useSelector } from 'react-redux';
import { sendMessageToFriend } from '../../api/User/Post/user';
import { sendMessageToReceiver } from '../../api/User/Get/user';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '600px',
        margin: '35px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 20,
        // marginRight: 20,
        // marginLeft: 20,
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 20px',
        border: '2px solid black',
    },
}));

const Options = ({ children }: any) => {
    const { me, callAccepted, callEnded, leaveCall, callUser } = useContext(VideoSocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();
    // const [copied, setCopied] = useState(false);
    const router = useRouter()
    const { companyAdminId } = useSelector(currentCompanyAdmin)
    const copy = async () => {
        navigator.clipboard.writeText(me);
        if (router.query.applicantId) {
            const result = await sendMessageToFriend(router.query.applicantId.toString(), companyAdminId, 'company')
            console.log(result)
            await sendMessageToReceiver(companyAdminId, result.data._id, `Please paste this id ${me} on the video option input and join`)
        }
    };
    async function handleJoin() {
        if (!idToCall) {
            return
        }
        callUser(idToCall)
    }
    function handleCall() {
        leaveCall()
        router.back()
    }
    return (
        <div className='flex flex-row justify-between relative'>
            {callAccepted && !callEnded ? (
                <>
                    <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="small" />} fullWidth onClick={handleCall} className={classes.margin}>
                        Hang Up
                    </Button>
                </>
            ) : (
                <div>
                    <div className='flex flex-col'>
                        <Button onClick={copy} variant="contained" color="primary" startIcon={<Assignment fontSize="small" />} fullWidth className={classes.margin}>
                            {router.query.applicantId ? 'Send join id' : 'Copy your link'}
                        </Button>
                        <TextField label="Paste Receiver Link" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                        <Button variant="contained" color="primary" startIcon={<Phone fontSize="small" />} fullWidth onClick={handleJoin} className={classes.margin}>
                            Join
                        </Button>
                    </div>
                </div>
            )}
            {children}
        </div>
    );
};

export default Options;