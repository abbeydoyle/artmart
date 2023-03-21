import React from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";

function Profile() {
  return (
    <div className="md:grid md:grid-cols-8 gap-1 flex items-center justify-center h-screen">
      <div className="bg-[#508192] m-5 p-5 rounded md:col-span-4 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <h2 className="text-2xl font-bold text-white pt-2">My Profile</h2>
        <Table className="bg-transparent text-white text-lg">
          <Table.Head className="bg-transparent text-black"> 
            <Table.HeadCell className="sr-only">Profile</Table.HeadCell>
            <Table.HeadCell className="sr-only">Current input</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body >
          <Table.Row className="border-gray-700">
              <Table.Cell className="whitespace-nowrap font-bold">
                Address
              </Table.Cell>
              <Table.Cell>1234 Center Street, City, State 98765</Table.Cell>
              <Table.Cell>
                <a
                  href="/editaddress"
                  className="font-medium hover:text-[#cccccc] hover:underline"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="dark:border-gray-700">
              <Table.Cell className="whitespace-nowrap font-bold">
                Email
              </Table.Cell>
              <Table.Cell>janedoe@email.com</Table.Cell>
              <Table.Cell>
                <a
                  href="/editemail"
                  className="font-medium hover:text-[#cccccc] hover:underline"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="dark:border-gray-700">
              <Table.Cell className="whitespace-nowrap font-bold">
                Password
              </Table.Cell>
              <Table.Cell>******</Table.Cell>
              <Table.Cell>
                <a
                  href="/editpassword"
                  className="font-medium hover:text-[#cccccc] hover:underline"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className="bg-[#508192] m-5 p-5 rounded md:col-span-4 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <h2 className="text-2xl font-bold text-white pt-2">My Lists</h2>
        <Table className="bg-transparent text-white text-lg">
          <Table.Head className="bg-transparent text-black"> 
            <Table.HeadCell className="sr-only">My Lists</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body >
            <Table.Row className="dark:border-gray-700">
              <Table.Cell className="whitespace-nowrap font-bold">
                My Cart
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/cart"
                  className="font-medium hover:text-[#cccccc] hover:underline"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="dark:border-gray-700">
              <Table.Cell className="whitespace-nowrap font-bold">
                My Wishlist
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/wishlist"
                  className="font-medium hover:text-[#cccccc] hover:underline"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="dark:border-gray-700">
              <Table.Cell className="whitespace-nowrap font-bold">
                Past Orders
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/pastorder"
                  className="font-medium hover:text-[#cccccc] hover:underline"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default Profile;
