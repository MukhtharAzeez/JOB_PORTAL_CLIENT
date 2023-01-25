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
import { currentUser } from "../../../redux/user/userAuthSlicer";
import { postLike } from "../../../api/User/Post/post";


interface props {
    mode: String;
    post: any;
}


function AllUsersPost({ mode, post }: props) {
    const { userId } = useSelector(currentUser);
    const [likes, setLikes] = React.useState(post.likes ? post.likes.length : 0);
    async function handleLike(postId: string) {
        const result = await postLike(postId, userId);
        if (result.data) setLikes(likes + 1);
        else setLikes(likes - 1);
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
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.jobDescription}
                </Typography>
            </CardContent>
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
        </Card>
    );
}

export default AllUsersPost;
