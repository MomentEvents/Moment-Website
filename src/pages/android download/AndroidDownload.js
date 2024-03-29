import React from "react";
import { useEffect } from "react";
import RedirectWindow from '../../components/RedirectWindow/RedirectWindow.tsx';

export default function AndroidDownload() {
  return (
    <RedirectWindow
      url={"https://play.google.com/store/apps/details?id=com.moment.eventsapp"}
    />
  );
}
