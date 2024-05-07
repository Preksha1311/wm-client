import axios from 'axios';
import React from 'react'
import SignUp from './signup/page';

interface Recycle {
  _id : string;
  address : string;
  email : string;
}
const UsersPage = async() => {
  const res = await fetch('http://localhost:5050/req/recycleWaste')
  const users:Recycle[] = await res.json();
  return (
    <>
    <h1>Users</h1>
    <ul>
      {users.map(user => <li key = {user._id}>{user.address}</li>)}
    </ul>
    </>
  )
}

export default UsersPage
