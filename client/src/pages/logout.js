import React from "react";
import Auth from "../utils/auth";

export default function LogoutModal({ setOpenLogoutModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenLogoutModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 mb-4 sm:flex">
              <div className="mt-2 text-center sm:ml-[4rem] sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">
                  Would you like to log out?
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                  Don't worry! You can always log back in at a later time.
                </p>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white hover:bg-red-600 bg-red-700 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    onClick={Auth.logout}
                  >
                    Log out
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setOpenLogoutModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
