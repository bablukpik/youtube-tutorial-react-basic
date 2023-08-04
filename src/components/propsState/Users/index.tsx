import React from "react";
import { User, UsersProps } from "./type";


export default function Users({ userList }: UsersProps) {
  return (
    <div>
      <ul>
        {userList?.map((user: User) => (
          <li key={user.id}>
            <p><strong>Fullname:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Salary:</strong> {user.salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
