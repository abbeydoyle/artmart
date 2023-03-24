// dependency
import React from "react";

// modal to appear when item as been added to cart
export default function CartAlert({ setOpenCartModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        {/* exit modal when clicking outside of modal element */}
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenCartModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white float-right"
              data-modal-hide="defaultModal"
              onClick={() => setOpenCartModal(false)}
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div className="mt-3 mb-4 sm:flex">
              <div className="mt-2 text-center sm:ml-[4rem] sm:text-left">
                <h4 className="text-lg font-medium text-gray-800 pb-4">
                  This item has been added to your cart!
                </h4>
                <div className="flex justify-around ">
                  <a
                    href="/cart"
                    className="mt-2 text-[15px] leading-relaxed text-gray-500 hover:text-[#36392c] underline"
                  >
                    View cart
                  </a>
                  <a
                    href="/"
                    className="mt-2 text-[15px] leading-relaxed text-gray-500 hover:text-[#36392c] underline"
                  >
                    Back to gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
