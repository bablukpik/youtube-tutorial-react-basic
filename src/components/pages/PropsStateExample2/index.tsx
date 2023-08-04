import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import Users from "../../propsState/Users";
import { User } from "../../propsState/Users/type";

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
      <h2>Users</h2>
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
      <Users userList={userList} />
    </>
  );
}

export default ProsStateExample2;
