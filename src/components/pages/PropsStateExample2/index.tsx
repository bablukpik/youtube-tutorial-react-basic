import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { User } from "../../../types/propsState.type";
import UserList from "./UserList";
import { Link } from "react-router-dom";

function ProsStateExample2() {
  const [inputValue, setInputValue] = useState<User>({
    id: 0,
    name: "",
    email: "",
    salary: 0,
  });
  const [userList, setUserList] = useState<User[]>([]);
  const formRef = useRef<HTMLFormElement | null>(null);

  // const userList = [
  //   { id: 1, name: "John", email: "john@gmail.com", salary: 100000 },
  //   { id: 2, name: "Doe", email: "doe@gmail.com" },
  // ];

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userObj = { ...inputValue, id: Date.now() };
    setUserList((prevUsers) => [...prevUsers, userObj]);
    formRef.current?.reset();
  };

  return (
    <>
      <h1>Users</h1>
      <label htmlFor="fullname">Full Name</label>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input name="name" id="fullname" type="text" onChange={handleInput} />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="text"
          // value={email}
          onChange={handleInput}
        />
        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          type="number"
          name="salary"
          // value={salary}
          onChange={handleInput}
        />
        <button>Submit</button>
      </form>
      <UserList userList={userList} />
      <br />
      <Link to="/">Back to Home</Link>
    </>
  );
}

export default ProsStateExample2;
