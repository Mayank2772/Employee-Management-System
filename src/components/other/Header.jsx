import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('Admin');

  useEffect(() => {
    if (props.data && props.data.firstname) {
      setUsername(props.data.firstname);
    } else {
      setUsername('Admin');
    }
  }, [props.data]);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello<br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-5 py-2 text-white rounded-sm'>
        Log Out
      </button>
    </div>
  );
};

export default Header;
