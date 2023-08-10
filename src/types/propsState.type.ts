export interface User {
  id: number;
  name: string;
  email: string;
  salary?: number | string;
}

export interface UsersProps {
  userList: User[];
  name?: string;
}
