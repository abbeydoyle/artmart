import React from "react";
import { Link } from "react-router-dom";

function profileLinks() {
  return (
    <>
      <h4 className="card-header bg-dark text-light p-2">My Profile</h4>
      <ul className="flex-row">
        <li className="mx-1">
          <Link to={`/editaddresses`} className="button">
            Edit Address
          </Link>
        </li>
        {/* <li className="mx-1">
            <Link to={`/wishlist`} className="button">
              My Wishlist
            </Link>
          </li> */}
        <li className="mx-1">
          <Link to={`/editemail`} className="button">
            Edit Email
          </Link>
        </li>
        <li className="mx-1">
          <Link to={`/editpassword`} className="button">
            Edit Password
          </Link>
        </li>
        <li className="mx-1">
          <Link to={`/pastorder`} className="button">
            Past Orders
          </Link>
        </li>
        <li className="mx-1">
          <Link to={`/signout`} className="button">
            signout
          </Link>
        </li>
      </ul>
    </>
  );
}

export default profileLinks;
