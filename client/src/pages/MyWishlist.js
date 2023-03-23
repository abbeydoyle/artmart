import React from "react";
import Wishlistcomponent from "../components/wishlist/index";

const Wishlist = () => {
  return (
    // <>
    // <h2>Wishlist</h2>
    // <div className="container">
    //     <Wishlistcomponent />
    // </div>
    // </>
    <>
      <h2 className="text-3xl font-bold underline text-[#36392c] pb-5">
        My Wishlist
      </h2>

      <main className="whitespace-nowrap text-[#36392c]">
        <div className="gap-8 md:columns-2 m-5">
          <div>

              <div className="w-full max-w-sm bg-white rounded-lg relative m-8 text-[#36392c] nosplit">
                <img
                  className="rounded-lg border-solid border-8 border-[#56280e] nosplit"
                  src="https://res.cloudinary.com/duxmtidm1/image/upload/v1679530345/Screen_Shot_2023-03-22_at_5.12.00_PM_aah4lz.png"
                  alt="Cliffs by the Sea at Trouville"
                />
                <div className="px-5 pb-5 nosplit">
                  <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight">
                    Cliffs by the Sea at Trouville
                    </h5>
                  </a>
                  
                  <div className="flex items-center justify-between absolute bottom-0 right-0">
                    <a>
                      🗑️{" "}
                      <span className="hover:underline">Remove from Wishlist</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm bg-white rounded-lg relative m-8 text-[#36392c] nosplit">
                <img
                  className="rounded-lg border-solid border-8 border-[#56280e] nosplit"
                  src="https://res.cloudinary.com/duxmtidm1/image/upload/v1679530161/the-starry-night-over-the-rhone_txvdu9.jpg"
                  alt="Starry Night over the Rhône"
                />
                <div className="px-5 pb-5 nosplit">
                  <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight">
                    Starry Night over the Rhône
                    </h5>
                  </a>
                  
                  <div className="flex items-center justify-between absolute bottom-0 right-0">
                    <a>
                      🗑️{" "}
                      <span className="hover:underline">Remove from Wishlist</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm bg-white rounded-lg relative m-8 text-[#36392c] nosplit">
                <img
                  className="rounded-lg border-solid border-8 border-[#56280e] nosplit"
                  src="https://res.cloudinary.com/duxmtidm1/image/upload/v1679290134/sunflowers_yprtbp.jpg"
                  alt="Sunflowers"
                />
                <div className="px-5 pb-5 nosplit">
                  <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight">
                    Sunflowers
                    </h5>
                  </a>
                  
                  <div className="flex items-center justify-between absolute bottom-0 right-0">
                    <a>
                      🗑️{" "}
                      <span className="hover:underline">Remove from Wishlist</span>
                    </a>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Wishlist;
