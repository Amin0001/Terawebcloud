import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import { CircleUserRound } from "lucide-react"; // Import the User icon from Lucide React

interface AccountMenuProps {
  // No need to pass `visible` prop from parent component
}

const AccountMenu: React.FC<AccountMenuProps> = () => {
  const { data: currentUser } = useCurrentUser();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { data: session } = useSession();

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleSignOut = () => {
    if (session) {
      signOut();
    }
  };

  return (
    <div className="relative">
      {/* Icon to toggle menu visibility */}
      <div
        className="cursor-pointer items-center p-2"
        onClick={toggleMenuVisibility}
      >
        {/* Lucide React User icon */}
        <CircleUserRound className="w-6 h-6 text-black" />
      </div>

      {/* Content of the menu */}
      {isMenuVisible && (
        <div className="bg-[#0A132E] w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
          <div className="flex flex-col gap-3">
            <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
              {/* Lucide React User icon */}
              <CircleUserRound className="w-8 h-8 text-white" />
              <p className="text-grey text-sm group-hover/item:underline">
                {currentUser?.name}
              </p>
            </div>
          </div>
          <hr className="bg-gray-600 border-0 h-px my-4" />
          <div
            onClick={handleSignOut}
            className="px-3 text-center text-white text-sm hover:underline"
          >
            Sign out of TerraWeb
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
