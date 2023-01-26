import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";
import { useSelector } from "react-redux";
import moment from "moment";
import { currentUser } from "../../../../redux/user/userAuthSlicer";
import { postLike } from "../../../../api/User/Post/post";
import { applyForJob } from "../../../../api/User/Get/post";
import { Alert, Snackbar } from "@mui/material";


interface props {
    mode: String;
    post: any;
}


function AllUsersPost({ mode, post }: props) {
    const { userId } = useSelector(currentUser);
    const [likes, setLikes] = React.useState(post.likes ? post.likes.length : 0);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState({messageType:'' , message:''});

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    async function handleLike(postId: string) {
        const result = await postLike(postId, userId);
        if (result.data) setLikes(likes + 1);
        else setLikes(likes - 1);
    }
    async function applyForAJob(postId:string){
        try {
            const mess = {
                message: "Wait we are proceeding your request !",
                messageType: "info"
            }
            setMessage(mess)
            setOpen(true);
            await applyForJob(postId, userId);
            const mes = {
                message: "You successfully applied for this job",
                messageType: "success"
            }
            setMessage(mes);
            setOpen(true);
        } catch (error: any) {
            const type = typeof error.response.data.message;
            if (type == "string") {
                const mes={
                    message: error.response.data.message,
                    messageType: "error"
                }
                setMessage(mes);
            } else {
                const mes = {
                    message: error.response.data.message[0],
                    messageType: "error"
                }
                setMessage(mes);
            }
            setOpen(true);
        }        
    }
    return (
        <Card
            className="shadow-2xl shadow-gray-800 rounded-md"
            sx={{
                minWidth: { xs: "auto", md: "auto", sm: 400 },
                margin: 1,
            }}
            key={post._id}
        >
            <CardHeader
                avatar={
                    // post.companyId.image.length ? (
                    //     <Avatar alt="User Profile" src={post.user.image} />
                    // ) : (
                    <Avatar className="bg-gray-500" aria-label="recipe">
                        {post.companyId.company[0]}
                    </Avatar>
                    // )
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.companyId.company}
                subheader={moment(post.createdAt).fromNow()}
            />
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 400, md: 500 },
                }}
            >
                <Image
                    src={post.image}
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 30vw,
                    33vw"
                    alt=""
                    className="object-cover object-top"
                />
            </Box>
            <CardContent className="max-h-48 overflow-scroll">
                <div className="flex pl-2">
                    <h4 className="font-bold">{post.job}</h4>
                </div>
                <div className="">
                    <Typography variant="body2" color="text.secondary" className="p-2">
                        <p className="font-bold">About</p>{post.jobDescription}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="p-2">
                        <p className="font-bold">Benefits</p>{post.benefits}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="p-2">
                        <p className="font-bold">Required Qualifications</p>{post.jobQualification}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="p-2">
                        <p className="font-bold">Applicants must have</p>{post.applications}
                    </Typography>
                </div>
            </CardContent>
            <div className="w-full "><p></p></div>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardActions disableSpacing>
                    {post.likes?.includes(userId) ? (
                        <IconButton
                            aria-label="add to favorites"
                            onClick={() => handleLike(post._id)}
                            className="hover:bg-transparent"
                            disableRipple
                        >
                            <Checkbox
                                checkedIcon={<FavoriteBorderIcon />}
                                icon={<Favorite sx={{ color: "red" }} />}
                            />
                            <p className="text-sm">{likes}</p>
                        </IconButton>
                    ) : (
                        <IconButton
                            aria-label="add to favorites"
                            onClick={() => handleLike(post._id)}
                            className="hover:bg-transparent"
                            disableRipple
                        >
                            <Checkbox
                                icon={<FavoriteBorderIcon />}
                                checkedIcon={<Favorite sx={{ color: "red" }} />}
                            />
                            <p className="text-sm">{likes}</p>
                        </IconButton>
                    )}
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <div onClick={()=>applyForAJob(post._id)} className="w-full px-6 py-1 shadow-md ml-4 hover:shadow-inner cursor-pointer bg-gray-100 text-gray-500 hover:text-gray-400 rounded-lg">
                        <p>Apply</p>
                    </div>
                </CardActions>
                <CardActions disableSpacing>
                    <IconButton aria-label="save post">
                        <Checkbox
                            icon={<BookmarkBorderIcon />}
                            checkedIcon={
                                <BookmarkIcon
                                    sx={{ color: mode == "light" ? "black" : "white" }}
                                />
                            }
                        />
                    </IconButton>
                </CardActions>
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={message.messageType== "error" ? "error" : message.messageType == "success" ? "success" : "info"}
                    sx={{ width: "100%" }}
                >
                    {message.message}
                </Alert>
            </Snackbar>
        </Card>
    );
}

export default AllUsersPost;
