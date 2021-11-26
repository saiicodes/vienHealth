import React from "react";
import {
  UserIcon,
  HomeIcon,
  CollectionIcon,
  DocumentSearchIcon,
  ChatAlt2Icon,
  AnnotationIcon,
  CashIcon,
  ChartPieIcon,
  ClipboardListIcon,
  DocumentDuplicateIcon,
  CameraIcon,
} from "@heroicons/react/outline";

const Profile = ({ user }) => {
  const userTools = [
    {
      tool: "Profile",
      href: "#",
      icon: UserIcon,
    },
    {
      tool: "My listing",
      href: "#",
      icon: CollectionIcon,
    },
    {
      tool: "Saved homes",
      href: "#",
      icon: HomeIcon,
    },
    {
      tool: "Saved search",
      href: "#",
      icon: DocumentSearchIcon,
    },
    {
      tool: "Messages",
      href: "#",
      icon: ChatAlt2Icon,
    },
    {
      tool: "Notifications",
      href: "#",
      icon: AnnotationIcon,
    },
    {
      tool: "Billing",
      href: "#",
      icon: CashIcon,
    },
    {
      tool: "Analytics",
      href: "#",
      icon: ChartPieIcon,
    },
    {
      tool: "Blog",
      href: "#",
      icon: ClipboardListIcon,
    },
  ];

  return (
    <div className="bg-white w-full py-8 px-8 mx-auto rounded-md shadow-md space-y-2 flex flex-col mb-4">
      {/* user profile */}
      <div className="flex flex-col items-center space-y-2">
        {/* image */}
        <div className="relative">
          <div className="absolute bottom-0 right-0 bg-green-800 rounded-full z-10 p-2">
            <CameraIcon className="flex-shrink-0 h-5 w-5 text-gray-200" />
          </div>
          <img
            className="relative mx-auto h-24 rounded-full"
            src="/mans.jpg"
            alt="Man's Face"
          />
        </div>

        {/* name */}
        <p className="text-lg text-black font-semibold">
          {user?.data.result.name || "User"}
        </p>
        <p className="text-gray-500 font-medium">Home Buyer</p>
        {/* button */}
        <button className="px-4 py-1 text-sm text-green-600 font-semibold rounded border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
          Edit Profile
        </button>
      </div>

      {/* user tools */}
      <div>
        {userTools?.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className="flex justify-between border-b p-2"
          >
            <h3 className="text-lg font-medium">{item.tool}</h3>
            <item.icon
              className="flex-shrink-0 h-6 w-6 text-gray-600"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      <div className="w-full space-y-4">
        <h3 className="text-xl font-medium mt-8">Profile link</h3>
        <div className="relative flex w-full flex-wrap items-stretch mb-3">
          <span className=" z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pr-3 py-3 inset-y-0 right-0">
            <DocumentDuplicateIcon className="flex-shrink-0 h-6 w-6 text-gray-600" />
          </span>
          <input
            type="text"
            value="https://udwell.com/profile=user.com"
            className=" px-3 py-3 placeholder-gray-400 relative bg-wh bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full pr-10 text-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
