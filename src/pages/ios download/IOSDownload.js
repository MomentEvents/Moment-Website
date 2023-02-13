import React from 'react'
import { useEffect } from 'react';

export default function IOSDownload() {
    useEffect(() => {
        window.location.assign('https://reddit.com');
    }, [])
  return (
    <div></div>
  )
}
