import { useState } from "react";
import { useStateContext } from "../Context/ContextProvider";
import useInlineStyle from "../hook/useInlineStyle";

const Login = () => {
  const { currentColor } = useStateContext();
  const [hover, setHover] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus, setFocus] = useState(false);

  const inputstyle = {
    color: currentColor,
    border: focus ? `1px solid ${currentColor}` : "",
    boxShadow: focus ? `1px 2px ${currentColor}` : "",
  };
  const inputstyle2 = {
    color: currentColor,
    border: focus2 ? `1px solid ${currentColor}` : "",
    boxShadow: focus2 ? `1px 2px ${currentColor}` : "",
  };
  return (
    <div className="p-5">
      <div className="relative  flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1
            className="text-3xl font-semibold text-center text-purple-700 underline"
            style={{ color: currentColor }}
          >
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label for="email" className=" text-primary block text-sm font-semibold ">
                Email
              </label>
              <input
                type="email"
                className="input block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                style={inputstyle}
                onFocus={() => setFocus("focus", true)}
                onBlur={() => setFocus(false)}
              />
            </div>
            <div className="mb-2">
              <label for="password" className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                style={inputstyle2}
                onFocus={() => setFocus2("focus", true)}
                onBlur={() => setFocus2(false)}
              />
            </div>
            <a href="#" className="text-xs  hover:underline" style={{ color: currentColor }}>
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                style={{ backgroundColor: currentColor }}
              >
                {" "}
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a
              href="#"
              className="font-medium text-purple-600 hover:underline"
              style={{ color: currentColor }}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
