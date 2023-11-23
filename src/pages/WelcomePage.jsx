import { useState } from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const WelcomePage = () => {
    const [registerPage, setRegisterPage] = useState(false);


    return (
        <div className="h-screen bg-[#ADD8E6] flex items-center justify-center">
      <div className="modal-box">
        <h3 className="font-bold text-xl text-center">
          {registerPage ? "Sign Up Now" : " Sign In Here"}
        </h3>

        <div>
          {registerPage ? (
            <SignUp setRegisterPage={setRegisterPage}> </SignUp>
          ) : (
            <SignIn setRegisterPage={setRegisterPage}></SignIn>
          )}
        </div>
      </div>
    </div>
    );
};

export default WelcomePage;