import React from "react";
import { useEffect } from "react";

export default function IOSDownload() {
  useEffect(() => {
    window.location.assign(
      "https://apps.apple.com/us/app/moment-events/id1671447709"
    );
  }, []);
  return (
    <div className="download">
      Redirecting. Still waiting? Click{" "}
      <a href="https://apps.apple.com/us/app/moment-events/id1671447709">
        here.
      </a>
    </div>
  );
}
