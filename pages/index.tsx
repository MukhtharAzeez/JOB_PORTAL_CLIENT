import React, { useEffect } from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import FormData from "form-data";
import NavBar from "../components/User/NavBar/NavBar";
import SideBar from "../components/User/Home/SideBar";
import Feed from "../components/User/Home/Feed";
import RightBar from "../components/User/Home/RightBar";
import { createTheme, ThemeProvider } from "@mui/material";
import { getSession, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import instance from "../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { currentTheme } from "../redux/user/ThemeSlice";
import { addUserDetails } from "../redux/user/userAuthSlicer";
import { useRouter } from "next/router";

const BottomBar = dynamic(
  () => import("../components/User/MobileBottom/MobileBottom")
);
// import axios from "axios";

// const inter = Inter({ subsets: ['latin'] })

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

export default function Home({ req }: { req: any }) {

  const dispatch = useDispatch()
  const mode = useSelector(currentTheme);
  const router = useRouter();

  useEffect(() => {
    
    (async () => {
      const session = await getSession({ req });
      console.log("github", session);
      if (session) {
        const chars =
          "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const passwordLength = 12;
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
          const randomNumber = Math.floor(Math.random() * chars.length);
          password += chars.substring(randomNumber, randomNumber + 1);
        }

        const data = new FormData();
        data.append("firstName", session.user.name);
        data.append("lastName", "");
        data.append("email", session.user.email);
        data.append("image", session.user.image);
        data.append("password", password);
        data.append("confirmPassword", password);
        data.append("signInWith", "google");
        try {
          const user = await instance.post("/auth/user/registerWithProviders", data, {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          });
          localStorage.setItem(
            "userName",
            user.data.result.firstName + " " + user.data.result.lastName
          );
          localStorage.setItem("email", user.data.result.email);
          localStorage.setItem("userId", user.data.result._id);
          localStorage.setItem("userToken", user.data.accessToken.access_token);
          dispatch(addUserDetails(user.data.result));
        } catch (error) {
          console.log(error);
        }
      }
        console.log("userId",localStorage.getItem("userId"))
        if(!localStorage.getItem("userId")){
          router.push('/User/Login')
        }
    })();
  }, []);

  // const {data:session} =
  useSession();

  const theme = createTheme({
    palette: {
      mode: mode == "light" ? "light" : "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Portal</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
        </Head>
        <Box color={"text.primary"} className="bg-gray-200">
          <NavBar mode={mode} />
          {/* <Grid container item sx={{ paddingLeft: { xs: 0, sm: 1, lg: 1 } }}>
            <Grid item sm={3} p={2} justifyContent="space-between">
              <SideBar />
            </Grid>
            <Grid item sm={5} pt={2}>
              <Feed mode={mode} />
            </Grid>
            <Grid item sm={4} className="md:pl-16 xs:pl-12">
              <RightBar />
            </Grid>
          </Grid> */}
          <div className="border ">
            <div className="flex justify-around md:pr-20">
              <div className="w-2/12 mt-8 hidden md:block">
                <SideBar />
              </div>
              <div className="lg:w-5/12 sm:w-full xs:w-2/12 md:pl-44 lg:pl-16 mt-5 flex justify-center">
                <Feed mode={mode} />
              </div>
              <div className=" md:w-2/12 md:pr-10  mt-4">
                <RightBar />
              </div>
            </div>
          </div>
          <BottomBar />
        </Box>
      </ThemeProvider>
    </>
  );
}

// export async function getServerSideProps({ req }: { req: any }) {
  // let session: any = await getSession({ req });
  // let cookies = req.cookies.jwt;

  // if (session == null && !cookies) {
  //   return {
  //     redirect: {
  //       destination: "/User/Login",
  //       permanent: false,
  //     },
  //   };
  // }

  // if (session?.user || cookies) {
  //   if (!session) session = null;
  //   if (!cookies) cookies = null;
  //   return {
  //     props: {
  //       session,
  //       cookies,
  //     },
  //   };
  // } else {
  //   return {
  //     redirect: {
  //       destination: "/User/Login",
  //       permanent: false,
  //     },
  //   };
  // }

// }
