import React from "react";
import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

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

  // call 'SetText' method in Unity, from GameObject 'React', with message state as parameter
  window.ButtonClicked = () => {
    sendMessage("React", "SetText", "Clicked from Unity!! via React!!");
  };

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
