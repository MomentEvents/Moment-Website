import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFoundRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/404')
  }, [])
  return (
    <div></div>
  )
}

export default NotFoundRedirect