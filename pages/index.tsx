
import { Spin } from 'antd';
import Router from 'next/router'
import React from 'react'

const Index = () => {
  React.useEffect(() => {
    Router.push('/smart');
  }, []);
  return (
    <div className='h-screen flex justify-center items-center' >
      <Spin className=''></Spin>
    </div>
  )
}

export default Index
