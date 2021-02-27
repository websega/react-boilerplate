import React from 'react';
import { useSelector } from 'react-redux';

import { InitialUserStateType } from '../../redux/reducers/user';

type StateType = {
  users: InitialUserStateType;
};

const Users = (): JSX.Element => {
  const users = useSelector((state: StateType) => state.users.users);

  return (
    <div>
      {users.map((user) => {
        const { id, name, username, email } = user;

        return (
          <div key={id} className="users">
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
