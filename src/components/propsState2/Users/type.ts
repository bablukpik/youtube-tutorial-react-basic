export interface User {
  id: number;
  name: string;
  email: string;
  salary?: number;
}

export interface UsersProps {
  userList: User[];
  name?: string;
}
