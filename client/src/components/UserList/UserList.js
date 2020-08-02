//Parent Component to list the Albums
import React, { useState, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { response } from '../sample';
import 'font-awesome/css/font-awesome.min.css';
import './UserList.css';

const UserList = () => {
  const [userDetails, setUserDetails] = useState(response.members);
  const viewSelectedUser = () => {
    let selectedUser = userDetails[idx];
    return <Modal user={selectedUser}></Modal>;
  };

  viewSelectedUser;
  return (
    <div className='userList-ctr container'>
      {userDetails.map((user, idx) => (
        <Card className='user-card'>
          <CardBody className='list-body'>
            <div className='header-ctr'>
              <span className='user-name'>{user.real_name}</span>
              <span className='user-city'>{user.tz.split('/')[0]}</span>
            </div>
            <div className='content-ctr'>
              <span>Last Seen at : Mar 16 2020 8:02PM</span>
              <span
                className='view'
                data-userid={idx}
                onClick={viewSelectedUser}
              >
                <i class='fa fa-eye' aria-hidden='true'></i>
              </span>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
