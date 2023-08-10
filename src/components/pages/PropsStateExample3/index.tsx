import React, { FormEvent, useRef, useState } from "react";
import { User } from "../../../types/propsState.type";
import UserList from "./UserList";
import { Link } from "react-router-dom";

function ProsStateExample3() {
  const [userList, setUserList] = useState<User[]>([]);
  const formRef = useRef<HTMLFormElement | null>(null);

  // const userList = [
  //   { id: 1, name: "John", email: "john@gmail.com", salary: 100000 },
  //   { id: 2, name: "Doe", email: "doe@gmail.com" },
  // ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const salary = formData.get('salary') as string;

    const userObj = { name, email, salary: Number(salary), id: Date.now() };
    setUserList((prevUsers) => [...prevUsers, userObj]);
    formRef.current?.reset();
  };

  return (
    <>
      <h2>Users</h2>
      <label htmlFor="fullname">Full Name</label>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          name="name"
          id="fullname"
          type="text"
         />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="text"
        />
        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          type="number"
          name="salary"
        />
        <button>Submit</button>
      </form>
      <UserList userList={userList} />
      <br />
      <Link to="/">Back to Home</Link>
    </>
  );
}

export default ProsStateExample3;
