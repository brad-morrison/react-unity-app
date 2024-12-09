import React from "react";
import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl"; // import react-unity-webgl

function UnityApp() {
  // useUnityContext hook to load Unity content
  const { unityProvider, isLoaded, loadingProgression, sendMessage } =
    useUnityContext({
      loaderUrl: "/Build/web.loader.js",
      dataUrl: "/Build/web.data",
      frameworkUrl: "/Build/web.framework.js",
      codeUrl: "/Build/web.wasm",
    });

  const [messageOne, setMessageOne] = useState("This is message one.");
  const [messageTwo, setMessageTwo] = useState("This is message two.");
  const [messageThree, setMessageThree] = useState("This is message three.");

  // Function that is called by Unity on button press
  // React then sends a message back
  window.ButtonClicked = () => {
    console.log("Unity button clicked");
    sendMessage("React", "SetText", "Clicked from Unity!! via React!!");
  };

  // Simple message send to Unity
  // Fires function "SetText", on GameObject "React", with 'message' as parameter
  const sendMessageToUnity = (message) => {
    sendMessage("React", "SetText", message);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "10px",
        }}
      >
        <p>{messageOne}</p>
        <p>{messageTwo}</p>
        <p>{messageThree}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => sendMessageToUnity(messageOne)}>
          Send Message 1
        </button>
        <button onClick={() => sendMessageToUnity(messageTwo)}>
          Send Message 2
        </button>
        <button onClick={() => sendMessageToUnity(messageThree)}>
          Send Message 3
        </button>
      </div>
      <Unity
        style={{ width: "1000px" }}
        className="unity"
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default UnityApp;
