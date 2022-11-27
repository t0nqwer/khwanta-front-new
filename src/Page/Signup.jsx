import { useState, useEffect } from "react";
import { useStateContext } from "../Context/ContextProvider";
const Signup = () => {
  const { currentColor } = useStateContext();

  const [focusName, setFocusName] = useState(false);
  const [focusSername, setFocusSername] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusConfirmPassword, setFocusConfirmPassword] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [User, setUser] = useState({
    name: "",
    sername: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const inputstylename = {
    color: currentColor,
    border: focusName ? `1px solid ${currentColor}` : "",
    boxShadow: focusName ? `1px 2px ${currentColor}` : "",
  };
  const inputstylesername = {
    color: currentColor,
    border: focusSername ? `1px solid ${currentColor}` : "",
    boxShadow: focusSername ? `1px 2px ${currentColor}` : "",
  };
  const inputstyleemail = {
    color: currentColor,
    border: focusEmail ? `1px solid ${currentColor}` : "",
    boxShadow: focusEmail ? `1px 2px ${currentColor}` : "",
  };
  const inputstyleusername = {
    color: currentColor,
    border: focusUsername ? `1px solid ${currentColor}` : "",
    boxShadow: focusUsername ? `1px 2px ${currentColor}` : "",
  };
  const inputstylepassword = {
    color: currentColor,
    border: focusPassword ? `1px solid ${currentColor}` : "",
    boxShadow: focusPassword ? `1px 2px ${currentColor}` : "",
  };
  const inputstyleconfirmpassword = {
    color: currentColor,
    border: focusConfirmPassword ? `1px solid ${currentColor}` : "",
    boxShadow: focusConfirmPassword ? `1px 2px ${currentColor}` : "",
  };

  const NameHandler = (e) => {
    setUser({ ...User, name: e.target.value });
  };
  const SernameHandler = (e) => {
    setUser({ ...User, sername: e.target.value });
  };
  const EmailHandler = (e) => {
    setUser({ ...User, email: e.target.value });
  };
  const UsernameHandler = (e) => {
    setUser({ ...User, username: e.target.value });
  };
  const PasswordHandler = (e) => {
    setUser({ ...User, password: e.target.value });
    if (User.confirmpassword !== e.target.value) {
        setIsPasswordMatch(false);
      } else {
        setIsPasswordMatch(true);
      }
    };
  
  const ConfirmPasswordHandler = (e) => {
    setUser({ ...User, confirmpassword: e.target.value })
    if (User.password !== e.target.value) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  };
  const SignUpHandler = () => {};
  return (
    <div className="p-5">
      <div className="relative  flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1
            className="text-3xl font-semibold text-center text-purple-700 "
            style={{ color: currentColor }}
          >
            ลงทะเบียน
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label className=" text-primary block text-sm font-semibold ">ชื่อ</label>
              <input
                className="input block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                style={inputstylename}
                onFocus={() => setFocusName("focus", true)}
                onBlur={() => setFocusName(false)}
                onChange={NameHandler}
              />
            </div>
            <div className="mb-2">
              <label className=" text-primary block text-sm font-semibold ">นามสกุล</label>
              <input
                className="input block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                style={inputstylesername}
                onFocus={() => setFocusSername("focus", true)}
                onBlur={() => setFocusSername(false)}
                onChange={SernameHandler}
              />
            </div>
            <div className="mb-2">
              <label className=" text-primary block text-sm font-semibold ">อีเมล</label>
              <input
                className="input block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                style={inputstyleemail}
                onFocus={() => setFocusEmail("focus", true)}
                onBlur={() => setFocusEmail(false)}
                onChange={EmailHandler}
              />
            </div>
            <div className="mb-2">
              <label className=" text-primary block text-sm font-semibold "> ชื่อผู้ใช้ </label>
              <input
                className="input block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                style={inputstyleusername}
                onFocus={() => setFocusUsername("focus", true)}
                onBlur={() => setFocusUsername(false)}
                onChange={UsernameHandler}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                รหัสผ่าน
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                style={inputstylepassword}
                onFocus={() => setFocusPassword("focus", true)}
                onBlur={() => setFocusPassword(false)}
                onChange={PasswordHandler}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                ยืนยันรหัสผ่าน
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                style={inputstyleconfirmpassword}
                onFocus={() => setFocusConfirmPassword("focus", true)}
                onBlur={() => setFocusConfirmPassword(false)}
                onChange={ConfirmPasswordHandler}
              />
              {!isPasswordMatch ? (
                <span className=" text-xs text-red-600">รหัสผ่านไม่ตรงกัน</span>
              ) : (
                ""
              )}
            </div>

            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                style={{ backgroundColor: currentColor }}
              >
                {" "}
                ลงทะเบียน
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            มีบัญชีในระบบแล้ว{" "}
            <a href="#" className="font-medium hover:underline" style={{ color: currentColor }}>
              เข้าสู่ระบบ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
