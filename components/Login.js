import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:bg-blue-700"
        onClick={signIn}
      >
        Login With Facebook
      </h1>
    </div>
  );
}

export default Login;
