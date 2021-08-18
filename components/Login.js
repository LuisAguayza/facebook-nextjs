import { signIn } from "next-auth/client";
import Image from "next/image";
import fbLogo from "../public/fb_logo.png";

function Login() {
  return (
    <div className="grid place-items-center mt-20">
      <Image src={fbLogo} width={200} height={200} objectFit="contain" />
      <h1
        onClick={signIn}
        className="p-5 mt-20 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}
export default Login;
