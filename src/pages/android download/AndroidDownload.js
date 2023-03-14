import React from "react";
import { useEffect } from "react";

export default function AndroidDownload() {
  useEffect(() => {
    window.location.assign(
      "https://play.google.com/store/apps/details?id=com.moment.eventsapp"
    );
  }, []);
  return (
    <div className="download">
      Redirecting. Still waiting? Click{" "}
      <a href="https://play.google.com/store/apps/details?id=com.moment.eventsapp">
        here.
      </a>
    </div>
  );
}
