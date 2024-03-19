import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import TempComp from "./pages/TempComp.jsx";
import Profiles from "./pages/RouterProfiles/Profiles.jsx";
import Profile from "./pages/RouterProfiles/Profile";
import ErrorPage from "./pages/ErrorPage";
import Button from "./pages/Button/Button";
import Cards from "./pages/Card/Cards.jsx";
import ColorPicker from "./pages/ColorPicker/ColorPicker.jsx";
import Food from "./pages/Food";
import Student from "./pages/Student/Student";
import UserGreeting from "./pages/UserGreeting/UserGreeting";
import List from "./pages/List/List";
import ProfilePicture from "./pages/ProfilePicture";
import Counter from "./pages/Counter/Counter";
import ComponentOnChange from "./pages/ComponentOnChange";
import CounterWithUpdater from "./pages/CounterWithUpdater/CounterWithUpdater";
import UpdateObjectsState from "./pages/UpdateObjectsState";
import UpdateArrays from "./pages/UpdateArrays";
import UpdateArrayOfObjects from "./pages/UpdateArrayOfObjects";
import ToDoList from "./pages/ToDoList/ToDoList";
import UseEffectComponent from "./pages/UseEffectComponent";
import UseEffectComponent2 from "./pages/UseEffectComponent2";
import DigitalClock from "./pages/DigitalClock/DigitalClock";
import ComponentA from "./pages/UseContextComponents/ComponentA";
import Component from "./pages/UseRefComponents/Component";
import StopWatch from "./pages/StopWatch/StopWatch";
import UseMemoComponent from "./pages/UseMemoComponent/UseMemoComponent";
import UseCallbackComponent from "./pages/UseCallbackComponent/UseCallbackComponent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/button",
        element: <Button />,
      },
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/color-picker",
        element: <ColorPicker />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/counter-with-updater",
        element: <CounterWithUpdater />,
      },
      {
        path: "/digital-clock",
        element: <DigitalClock />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/profiles",
        element: <Profiles />,
      },
      {
        path: "/stopwatch",
        element: <StopWatch />,
      },
      {
        path: "/student",
        element: <Student />,
      },
      {
        path: "/todo-list",
        element: <ToDoList />,
      },
      {
        path: "/use-callback",
        element: <UseCallbackComponent />,
      },
      {
        path: "/use-context",
        element: <ComponentA />,
      },
      {
        path: "/use-memo",
        element: <UseMemoComponent />,
      },
      {
        path: "/use-ref",
        element: <Component />,
      },
      {
        path: "/user-greeting",
        element: <UserGreeting />,
      },
      {
        path: "/component-onchange",
        element: <ComponentOnChange />,
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "/profile-picture",
        element: <ProfilePicture />,
      },
      {
        path: "/update-arrays",
        element: <UpdateArrays />,
      },
      {
        path: "/update-array-of-object",
        element: <UpdateArrayOfObjects />,
      },
      {
        path: "/update-object",
        element: <UpdateObjectsState />,
      },
      {
        path: "/use-effect",
        element: <UseEffectComponent />,
      },
      {
        path: "/use-effect2",
        element: <UseEffectComponent2 />,
      },
    ],
  },
  {
    path: "/profiles",
    element: <Profiles />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/temp",
    element: <TempComp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
