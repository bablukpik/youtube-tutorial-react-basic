import { User, UsersProps } from "../../../types/propsState.type";


export default function UserList({ userList }: UsersProps) {
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
