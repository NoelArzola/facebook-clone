import React from "react";
// import Image from "next/image";
import { signIn } from "next-auth/client";
// import ImgLoader from "../utils/ImgLoader";

function Login() {
  return (
    <div className="grid place-items-center">
      <img
        src="img/facebook-logo.png"
        height="400"
        width="400"
        alt=""
        className="mt-20"
      />
      <h1
        className="mt-4 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:bg-blue-700"
        // @ts-ignore
        onClick={signIn}
      >
        Login With Facebook
      </h1>
      <p className="text-xs mt-12 max-w-md">
        <span className="font-bold text-gray-400">Privacy Policy: </span>
        This is a portfolio project. Short and sweet, your data is your data and
        the only access I have is what's needed for you to login and have a
        custom experience. This includes your email, name, and profile photo.
        Authentication is handled by Next Auth and Facebook, so I don't access
        any sensitive data.
      </p>
    </div>
  );
}

// @TODO insert next image loader here

export default Login;
