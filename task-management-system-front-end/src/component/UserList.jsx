import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="py-8 mt-16 font-serif">
      <div className="max-w-screen-lg mx-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left"> Image</th>
              <th className="px-4 py-2 text-left">First Name</th>
              <th className="px-4 py-2 text-left">Last Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role Type</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2">
                  <img
                    src={user.headerImage}
                    alt={`${user?.firstName[0] +"    "+user?.lastName[0]}`}
                    className="flex capitalize justify-center items-center text-white text-sm w-14 h-14 rounded-full bg-gray-900"
                  />
                </td>
                <td className="px-4 py-2">{user.firstName}</td>
                <td className="px-4 py-2">{user.lastName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user?.role?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
