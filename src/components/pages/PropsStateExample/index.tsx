import React, { ChangeEvent, useState } from "react";
import { User } from "../../../types/propsState.type";
import UserList from "./UserList";
import { Link } from "react-router-dom";

function PropsStateExample() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState<number | string>('');
  const [userList, setUserList] = useState<User[]>([]);

  // const userList = [
  //   { id: 1, name: "John", email: "john@gmail.com", salary: 100000 },
  //   { id: 2, name: "Doe", email: "doe@gmail.com" },
  // ];

  const handleFullnameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSalaryInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSalary(Number(e.target.value));
  };

  const handleSubmit = () => {
    const userObj = { id: Date.now(), name: username, email, salary };
    setUserList((prevUsers) => [...prevUsers, userObj]);
    setUsername("");
    setEmail("");
    setSalary("");
  };

  return (
    <>
      <h1>Users</h1>
      <label htmlFor="fullname">Full Name</label>
      <input
        id="fullname"
        type="text"
        value={username}
        onChange={handleFullnameInput}
      />
      <label htmlFor="email">Email</label>
      <input id="email" type="text" value={email} onChange={handleEmailInput} />
      <label htmlFor="salary">Salary</label>
      <input
        id="salary"
        type="number"
        value={salary}
        onChange={handleSalaryInput}
      />
      <button onClick={handleSubmit}>Submit</button>
      <UserList userList={userList} />
      <br />
      <Link to="/">Back to Home</Link>
    </>
  );
}

export default PropsStateExample;
