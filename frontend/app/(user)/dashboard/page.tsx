// pages/admin.tsx
'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useIsAuth } from '@/utils/useIsAuth';
import { useRouter } from 'next/navigation';
import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { useGetListingsQuery } from '@/graphql/gql/graphql';

const AdminDashboard: React.FC = () => {
  const router = useRouter();
  useIsAuth();
  const [, GetListings] = useGetListingsQuery();

  // const { data, error } = await GetListings({});

  // useEffect(() => {
  //   // Log data and error after the data has been fetched
  //   console.log(data);
  //   console.error(error);
  // }, [data, error]);

  // Sample data for the list
  const items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    // Add more items as needed
  ];

  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </header>
      <nav className="bg-gray-800 text-white p-2">
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/dashboard"
              className="hover:text-blue-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="hover:text-blue-300"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-blue-300"
            >
              Products
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <main className="p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to the Admin Dashboard
          </h2>

          {/* Buttons for routing to other pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Link
              href="/create-listing"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Create Listing
            </Link>
            <Link
              href="/create-video"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Create Video
            </Link>
            <Link
              href="/create-article"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Create Article
            </Link>
            {/* Add more buttons for other actions */}
          </div>

          {/* List of information */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">List of Items</h3>
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="mb-2"
                >
                  <div className="text-gray-800">
                    <span className="font-semibold">{item.name}:</span>{' '}
                    {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(AdminDashboard);
