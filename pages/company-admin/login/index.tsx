import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, CircularProgress, FormControl, Snackbar } from "@mui/material";
import { InputLabel } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FilledInput } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import instance from "../../../axios/axios";
import { useDispatch } from "react-redux";
import { addCompanyAdminDetails } from "../../../redux/company-admin/CompanyAdminAuthSlicer";
import PublicRoute from "../../../protectRoutes/publicRoute";

const theme = createTheme();

export default function SignIn() {
    // const dispatch = useDispatch();
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const dispatch = useDispatch();


    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        const data = new FormData(event.currentTarget);
        try {
            const companyAdmin = await instance.post("/auth/company-admin/login", data, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (companyAdmin) {
                localStorage.setItem(
                    "adminName",
                    companyAdmin.data.result.name
                );
                localStorage.setItem("email", companyAdmin.data.result.email);
                localStorage.setItem("companyAdminId", companyAdmin.data.result._id);
                localStorage.setItem("companyId", companyAdmin.data.result.company);
                localStorage.setItem("companyAdminToken", companyAdmin.data.accessToken.access_token);
                dispatch(addCompanyAdminDetails(companyAdmin.data));
                router.push("/company-admin");
            }
        } catch (error: any) {
            const type = typeof error.response.data.message;
            if (type == "string") {
                setMessage(error.response.data.message);
            } else {
                setMessage(error.response.data.message[0]);
            }
            setOpen(true);
            setIsLoading(false);
        }
    };



    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const userLoginPage = () => router.push("/user/login");


    return (
        <PublicRoute>
            <ThemeProvider theme={theme}>
                <Box
                    bgcolor={"white"}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        marginTop: 10,
                    }}
                >
                    <Container
                        component="main"
                        sx={{ marginLeft: { xl: 24, xs: "auto" } }}
                        maxWidth="xs"
                    >
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                SIGN IN
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 1 }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            variant="filled"
                                            size="small"
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth required variant="filled">
                                            <InputLabel htmlFor="filled-adornment-password">
                                                Password
                                            </InputLabel>
                                            <FilledInput
                                                id="filled-adornment-password"
                                                type={showPassword ? "text" : "password"}
                                                required
                                                name="password"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="TermsAndConditions"
                                                    defaultChecked
                                                    sx={{
                                                        color: "#dc8a64",
                                                        "&.Mui-checked": {
                                                            color: "#dc8a64",
                                                        },
                                                    }}
                                                    color="primary"
                                                />
                                            }
                                            label="Accept Terms And Conditions"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                        backgroundColor: "#dc8a64",
                                        height: 50,
                                        "&:hover": { backgroundColor: "#dc8a64" },
                                    }}
                                    style={{ backgroundColor: "#dc8a64" }}
                                >
                                    {isLoading ? (
                                        <CircularProgress sx={{ color: "white" }} />
                                    ) : (
                                        "Sign In"
                                    )}
                                </Button>
                            </Box>
                            <div className="flex justify-center flex-col mt-3">
                                <p className="text-center">Want to Login as a User? <span onClick={userLoginPage} className="cursor-pointer hover:text-[#dc8a64]">Go to Page</span> </p>
                            </div>
                        </Box>
                    </Container>
                    <Box
                        sx={{
                            width: "50%",
                            display: { xs: "none", md: "flex" },
                            justifyContent: "flex-start",
                        }}
                    >
                        <Image
                            src="https://www.recruiter.com//recruiting/wp-content/uploads/2022/04/sourcing-candidates.jpg"
                            alt=""
                            width={560}
                            height={560}
                        />
                    </Box>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert
                            onClose={handleClose}
                            severity="error"
                            sx={{ width: "100%" }}
                        >
                            {message}
                        </Alert>
                    </Snackbar>
                </Box>
            </ThemeProvider>
        </PublicRoute>

    );
}
