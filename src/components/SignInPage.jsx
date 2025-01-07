import React from "react";
import SignInForm from "./SignInForm";
import InfoSection from "./InfoSection";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {/* Sign-In Form */}
        <SignInForm />

        {/* Information Section */}
        <InfoSection />
      </div>
    </div>
  );
};

export default SignInPage;
