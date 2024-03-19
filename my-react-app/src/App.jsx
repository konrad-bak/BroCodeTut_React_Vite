import { NavLink, Outlet } from "react-router-dom";

function App() {
  const pages = [
    {
      name: "button",
      title: "Button",
    },
    {
      name: "cards",
      title: "Cards",
    },
    {
      name: "color-picker",
      title: "ColorPicker",
    },
    {
      name: "counter",
      title: "Counter",
    },
    {
      name: "counter-with-updater",
      title: "Counter with Updater",
    },
    {
      name: "digital-clock",
      title: "Digital Clock",
    },
    {
      name: "list",
      title: "List",
    },
    {
      name: "profiles",
      title: "Profiles",
    },
    {
      name: "stopwatch",
      title: "StopWatch",
    },
    {
      name: "student",
      title: "Student",
    },
    {
      name: "todo-list",
      title: "ToDo List",
    },
    {
      name: "use-callback",
      title: "UseCallback Component",
    },
    {
      name: "use-context",
      title: "UseContext Component",
    },
    {
      name: "use-memo",
      title: "UseMemo Component",
    },
    {
      name: "use-ref",
      title: "UseRef Component",
    },
    {
      name: "user-greeting",
      title: "User Greeting",
    },
    {
      name: "component-onchange",
      title: "Component onChange",
    },
    {
      name: "food",
      title: "Food",
    },
    {
      name: "profile-picture",
      title: "Profile Picture",
    },
    {
      name: "update-arrays",
      title: "Update Arrays",
    },
    {
      name: "update-array-of-object",
      title: "Update Array of Object",
    },
    {
      name: "update-object",
      title: "Update Object",
    },
    {
      name: "use-effect",
      title: "UseEffect Component",
    },
    {
      name: "use-effect2",
      title: "UseEffect Component 2",
    },
  ];

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "brocoly", calories: 50 },
  ];

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 p-6">
        {pages.map(page => {
          return (
            <NavLink
              key={page.name}
              to={`/${page.name}`}
              className={({ isActive }) => {
                return `${isActive ? "text-teal-500" : ""} border-b-2`;
              }}
            >
              {page.title}
            </NavLink>
          );
        })}
      </div>
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
