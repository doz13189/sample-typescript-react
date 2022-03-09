import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Practice1 } from './9/Practice/Practice1';
import { Practice2 } from './9/Practice/Practice2';
import { Practice3 } from './9/Practice/Practice3';
import { Practice4 } from './9/Practice/Practice4';
import { UserCard } from './11/UserCard';
import axios from 'axios';
import { User } from './11/types/api/user';
import { UserProfile } from './11/types/userProfile';
import { useAllUser } from './11/hooks/useAllUsers';

const user = {
  id: 1,
  name: 'tk',
  email: 'light@gmail.com',
  address: 'adress'
}

function App() {

  const { getUsers, userProfiles, loading, error } = useAllUser()

  const onClickFetchUser = () => getUsers()

  return (
    <div className="App">
      <div>
        { loading ? <p>true</p> : <p>false</p> }
      </div>
      <div>
        { error ? <p>true</p> : <p>false</p> }
      </div>
      <button onClick={onClickFetchUser}>fetch user data</button>
      {
        userProfiles.map((user) => {
          return <UserCard key={user.id} user={user} />
        })
      }
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
