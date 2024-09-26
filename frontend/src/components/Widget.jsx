import React, { useEffect } from "react";

const ChippChatWidget = () => {
  useEffect(() => {
    window.CHIPP_APP_URL = "https://ryaninfo-10423.chipp.ai";
    window.CHIPP_APP_ID = 10423;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChippChatWidget;
