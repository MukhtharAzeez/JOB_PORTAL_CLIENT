import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("userToken");
  const url = req.nextUrl.clone();

  if (token && url.pathname === "/User/Login") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  if (token && url.pathname === "/User/Signin") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  if (!token && url.pathname === "/") {
    url.pathname = "/User/Login";
    return NextResponse.redirect(url);
  }
}
