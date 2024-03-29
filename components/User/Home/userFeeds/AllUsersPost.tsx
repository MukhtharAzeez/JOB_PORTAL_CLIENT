import React, { useContext } from "react";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useSelector } from "react-redux";
import { Collapse, Divider, InputBase, Paper, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import moment from "moment";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { currentUser } from "../../../../redux/user/userAuthSlicer";
import {
  getPostComment,
  postComment,
  postLike,
} from "../../../../api/User/Post/post";
import { useRouter } from "next/router";
import { Comment } from "./Comment";
import useNotification from "../../../../customHooks/useNotification";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AuthorizationContext } from "../../../../contexts/AuthorizationContext";

interface props {
  mode: String;
  post: any;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  if (expand) {
  }
  return <IconButton disableRipple {...other} />;
})(({ theme, expand }: any) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function AllUsersPost({ mode, post }: props) {
  const { alertToLogin } = useContext(AuthorizationContext);
  const { userId, userName } = useSelector(currentUser);
  const router = useRouter();
  const setNotification = useNotification()
  const [likes, setLikes] = React.useState(post.likes ? post.likes.length : 0);
  const [comment, setComment] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [allComments, setAllComments] = React.useState(null);
  const [emojiPicker, setEmojiPicker] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function handleLike(postId: string) {
    let result;
    try {
      result = await postLike(postId, userId);
    } catch (err: any) {
      if (err?.response?.data?.statusCode === 401) {
        alertToLogin()
        return
      }
    }
    if (result.data) {
      setLikes(likes + 1);
      setNotification({
        content: `${userName} has liked your post !`,
        type: "success",
        receiver: post.user._id as string,
      });
    }
    else {
      setLikes(likes - 1);
      setNotification({
        content: `${userName} has disliked your post !`,
        type: "error",
        receiver: post.user._id as string,
      });
    }

  }

  function handleComment(e: any) {
    setExpanded(false);
    setEmojiPicker(false);
    setComment(e.target.value);
  }

  async function sendComment(postId: string) {
    setEmojiPicker(false);
    if (comment.trim().length == 0) return setComment("");
    try {
      await postComment(postId, userId, comment);
    } catch (err: any) {
      if (err?.response?.data?.statusCode === 401) {
        alertToLogin()
        return
      }
    }
    setNotification({
      content: `${userName} has commented on your post !`,
      type: "info",
      receiver: post.user._id as string,
    });
    setComment("");
    getPostComments(postId);
  }

  async function getPostComments(postId: string) {
    if (expanded) {
      handleExpandClick();
    } else {
      try {
        const comments = await getPostComment(postId);
        setAllComments(comments.data);
      } catch (err: any) {
        if (err?.response?.data?.statusCode === 401) {
          alertToLogin()
          return
        }
      }
      handleExpandClick();
    }
  }

  return (
    <div className="min-w-[360px] md:min-w-[500px] w-full lg:max-w-[600px] container bg-white rounded-md shadow-lg mb-2">
      <CardHeader
        avatar={
          post.user.image.length ? (
            <Avatar onClick={() => router.push({
              pathname: "/user/visit-user",
              query: {
                friend: post.user._id
              },
            },
              "/user/visit-user"
            )
            } alt="User Profile" src={post.user.image} className="cursor-pointer" />
          ) : (
            <Avatar onClick={() => router.push({
              pathname: "/user/visit-user",
              query: {
                friend: post.user._id
              },
            },
              "/user/visit-user"
            )
            } className="bg-gray-500 cursor-pointer" aria-label="Friend">
              {post.user.firstName[0]}
            </Avatar>
          )
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.user.firstName + " " + post.user.lastName}
        subheader={moment(post.createdAt).fromNow()}
      />
      <Carousel showThumbs={false} autoPlay={false}>
        {post.image.map(function (image: any) {
          return (
            <img key={image} className="w-full cursor-pointer" src={"https://m.media-amazon.com/images/I/41FzfSpv4iL.jpg"} alt="" />
          );
        })}
      </Carousel>
      <CardContent>
        <p className="text-sm italic max-h-28 overflow-scroll">
          {post.description}
        </p>
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

          <IconButton
            aria-label="chat"
            sx={{ marginRight: 1 }}
            className="hover:bg-transparent"
            onClick={() => getPostComments(post._id)}
          >
            <ExpandMore
              expand={expanded}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ChatBubbleOutlineIcon />
            </ExpandMore>
          </IconButton>
        </CardActions>
      </Box>

      {/* Comment Box TextField */}
      <Box>
        <Paper
          component="form"
          sx={{
            p: "4px 4px",
            ml: 3,
            mb: 2,
            mt: 2,
            display: "flex",
            alignItems: "center",
            width: "90%",
          }}
          className={
            mode == "light" ? "bg-slate-100" : "shadow-sm shadow-gray-600"
          }
        >
          <IconButton
            sx={{ p: "10px" }}
            aria-label="menu"
            onClick={() => setEmojiPicker(!emojiPicker)}
          >
            <EmojiEmotionsIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="say something...."
            inputProps={{ "aria-label": "say something...." }}
            onChange={handleComment}
            value={comment}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <AttachFileIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            onClick={() => sendComment(post._id)}
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <SendIcon />
          </IconButton>
        </Paper>
        <Box
          className={
            emojiPicker ? "absolute z-50 block justify-center" : "hidden"
          }
        >
          <Picker
            data={data}
            previewPosition="none"
            onEmojiSelect={(e: any) => {
              setComment(comment + e.native);
            }}
          />
        </Box>
      </Box>
      {/* Comment Box */}
      <Collapse in={expanded} timeout="auto" unmountOnExit className="">
        <Comment comments={allComments} />
      </Collapse>
    </div>
  );
}