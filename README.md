# react-unity-app

ReactController.cs - the file from Unity that is interacting with React

UnityApp.jsx - the component that holds the Unity Game and functions that Unity can access.

test project build folder - https://drive.google.com/file/d/17ujw1VYXkci23Zc5INA87LaDzG67DSGd/view?usp=sharing

---

### Unity Build that sends dummy player data to React

Unity build that has 'Send to React' button which sends dummy player data to the React app: [Build folder](Build.zip) in repo files

Unity script calls ```UnityEngine.Application.ExternalCall("receiveDataFromUnity", jsonData);```

