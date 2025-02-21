"use client";
import { authFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/auth-style.scss";
import { Form } from "./ui/form";
import CustomInput from "./CustomInput";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { login, signUp } from "@/lib/actions/user.action";
import { User } from "@/types/User";
import "./styles/auth-style.scss";

type AuthFormProps = {
  type: string;
};

const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null); // Define `user` with `User | null`
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  // define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        const newUser = await signUp(data);
        if (newUser) {
          setUser(newUser);
          router.push("/");
        }
      }

      if (type === "login") {
        await login({
          email: data.email,
          password: data.password,
        });
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex w-full h-[900px]">
      <div className="left-side flex flex-col items-start justify-center gap-[70px] pl-24 pr-8 w-[736px] h-full">
        <Image
          src="/images/Logo.png"
          alt="Logo"
          width={173.63}
          height={36}
          className="mb-16"
        />

        <Image
          src="/images/pablo-sign-in.png"
          alt="Sign-In"
          width={600}
          height={337.57}
        />
      </div>

      <div className="flex flex-col justify-center items-center shadow-left w-[704px] h-full bg-white">
        <div className="form">
          <header>
            <h1 className="header">Welcome!</h1>
            <p className="description ">
              {user
                ? "LOG IN"
                : type === "login"
                ? "Enter details to login"
                : "Fill form to Sign Up"}
            </p>
          </header>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {type === "login" && (
                <div className="">
                  <CustomInput
                    control={form.control}
                    name="email"
                    placeholder="Email"
                  />
                  <CustomInput
                    control={form.control}
                    name="password"
                    placeholder="Password"
                  />
                  <p className="text-[#39CDCC] text-[12px] mb-8 cursor-pointer">
                    FORGOT PASSWORD?
                  </p>
                  <Button type="submit" disabled={isLoading} className="button">
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                        Loading...
                      </>
                    ) : type === "login" ? (
                      "LOG IN"
                    ) : (
                      "SIGN UP"
                    )}
                  </Button>
                </div>
              )}
            </form>
          </Form>
          <footer className="footer">
            <p className="link-description">
              {type === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "login" ? "/sign-up" : "/login"}
              className="form-link"
            >
              {type === "login" ? "Sign Up" : "Login"}
            </Link>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
