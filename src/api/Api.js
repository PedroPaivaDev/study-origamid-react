import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

const Api = () => {
  return (
    <div>
        <h2>USER_POST</h2>
        <UserPost/>
        <h2>TOKEN_POST</h2>
        <TokenPost />
        <h2>PHOTO_POST</h2>
        <PhotoPost/>
        <h2>PHOTO_GET</h2>
        <PhotoGet/>
    </div>
  );
}

export default Api;