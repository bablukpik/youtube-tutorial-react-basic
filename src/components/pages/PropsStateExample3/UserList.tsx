import { User, UsersProps } from "../../../types/propsState.type";


export default function UserList({ userList }: UsersProps) {
  return (
    <div style={{marginTop: '10px'}}>
      <ul>
        {userList?.map((user: User) => (
          <li style={{marginBottom: '10px'}} key={user.id}>
            <p><strong>Fullname:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Salary:</strong> {user.salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
