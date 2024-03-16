import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const { signup, error, isLoading } = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(email, password);
    // console.log("Email:", email);
    // console.log("Password:", password);
  };

  return (
    <div className="w-full py-12 space-y-6 md:space-y-10">
      <div className="mx-auto max-w-xl px-4 space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-gray-200  rounded-lg"
        >
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Enter your email"
                  required=""
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  placeholder="Enter your password"
                  required=""
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                disabled={isLoading}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-600/80 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Sign Up
              </button>
              {error && (
                <div className="text-sm bg-red-100 text-red-600 border-[1px] border-red-300 rounded-lg py-2 px-3 ">
                  {error}
                </div>
              )}
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-100 h-[1px] w-full"
            ></div>
            <div className="space-y-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                Sign up with Google
              </button>

              <div className="text-center text-sm">
                Already have an account?
                <Link to="/signin" className="underline ml-1" href="#">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
