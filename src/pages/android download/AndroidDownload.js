import React from 'react'
import { useEffect } from 'react';

export default function AndroidDownload() {
    useEffect(() => {
        window.location.assign('https://mariokartcentral.com');
    }, [])
  return (
    <div></div>
  )
}
