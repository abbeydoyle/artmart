import React from "react";
import { Footer } from "flowbite-react";

const FooterApp = () => {
  return (
    // TODO: link open in new tab
    <Footer container={true} className="flex justify-center">
      <Footer.Copyright
        href="https://github.com/abbeydoyle/artmart/blob/develop/LICENSE"
        by="ArtMart"
        year={2023}
      />
    </Footer>
  );
};

export default FooterApp;
