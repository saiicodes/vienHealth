import React from "react";
import Profile from "./Profile";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Home = ({ user }) => {
  const authUser = user;

  return (
    <div>
      {authUser?.data.result ? (
        <div className="flex w-full px-6 space-x-4">
          <div className="w-3/12">
            <Profile user={user} />
          </div>

          <div className="bg-gray-200 p-4 flex flex-col w-9/12 space-y-5">
            <div className="w-full">
              <SectionOne className="w-full h-full" />
            </div>
            <div className="w-full">
              <SectionTwo />
            </div>
            <div className="w-full">
              <SectionThree />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-9xl font-semibold text-blue-400">Hello</h1>
          <p className="text-lg font-medium">Please sign in to continue</p>
        </div>
      )}
    </div>
  );
};

export default Home;
