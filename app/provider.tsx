

"use client";

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import { UserDetailContext } from '@/context/UserDeatailContext';

interface ProviderProps {
  children: React.ReactNode;
}

export type UserDetail={
  name: string;
  email: string;
  credits: number;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {

  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<any>(); 
  

  const CreateNewUser = async (user: any) => {
    try {
      const result = await axios.post('/api/Users', { user });
      console.log(result);
      setUserDetail(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      CreateNewUser(user);
    }
  }, [user]);

  return (
    <div>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </div>
  );
};

export default Provider