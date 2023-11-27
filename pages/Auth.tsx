import React from "react";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import NavBar from "../components/Navbar";
import Input from "../components/Input";
import image2 from "../public/images/iac.jpg";
import Image from "next/image";

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/profiles",
      });

      router.push("/profiles");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      // After successful registration, navigate to /profiles
      router.push("/profiles");
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, router]);

  return (
    <div className="relative h-full w-full">
      <nav className="px-12 py-5">
        <NavBar />
      </nav>
      <div className="flex h-full pr-16 pb-16">
        <div className="bg-white from rounded-md shadow-lg ml-16 px-16 py-16 self-center mt-0 lg:w-1/2 lg:max-w-md rounded-md w-full z-10">
          <h2 className="text-black text-4xl mb-8 font-semibold terra">
            {variant === "login" ? "Sign in" : "Create an Account"}
          </h2>
          <div className="flex flex-col gap-4">
            {variant === "register" && (
              <Input
                id="name"
                type="text"
                label="Username"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
            )}
            <Input
              id="email"
              type="email"
              label="Email address"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={variant === "login" ? login : register}
            className="bg-blue-900 py-3 text-white rounded-md w-full mt-10 hover:bg-blue-700 transition"
          >
            {variant === "login" ? "Login" : "Sign up"}
          </button>
          <div className="flex flex-row items-center gap-4 mt-8 justify-center">
            <div
              onClick={() => signIn("google", { callbackUrl: "/profiles" })}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FcGoogle size={32} />
            </div>
            <div
              onClick={() => signIn("github", { callbackUrl: "/profiles" })}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FaGithub size={32} />
            </div>
          </div>
          <p className="text-neutral-500 mt-12">
            {variant === "login"
              ? "First time using TerraWeb?"
              : "Already have an account?"}
            <span
              onClick={toggleVariant}
              className="text-blue-500 ml-1 hover:underline cursor-pointer"
            >
              {variant === "login" ? "Create an account" : "Login"}
            </span>
            .
          </p>
        </div>{" "}
        <Image
          src={image2}
          className="absolute h-full pr-32 w-[50vw]  struct"
          style={{
            objectFit: "cover",
          }}
        />
      </div>{" "}
    </div>
  );
};

export default Auth;
