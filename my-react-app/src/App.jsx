// import Header from "./Header"
// import Footer from "./Footer"
// import Food from "./Food"
// import Card from "./Card"
// import Button from "./Button/Button"
// import Student from "./Student"
// import UserGreeting from "./UserGreeting"
// import List from "./List"
// import ProfilePicture from "./ProfilePicture"
// import MyComponent from "./MyComponent"
// import Counter from "./Counter"
// import ComponentOnChange from "./ComponentOnChange"
// import ColorPicker from "./ColorPicker"
// import CounterWithUpdater from "./CounterWithUpdater"
// import UpdateObjectsState from "./UpdateObjectsState"
// import UpdateArrays from "./UpdateArrays"
// import UpdateArrayOfObjects from "./UpdateArrayOfObjects";
// import ToDoList from "./ToDoList";
// import UseEffectComponent from "./UseEffectComponent";
// import UseEffectComponent2 from "./UseEffectComponent2";
// import DigitalClock from "./DigitalClock";
// import ComponentA from "./UseContextComponents/ComponentA";
// import Component from "./UseRefComponents/Component";
import StopWatch from "./StopWatch/StopWatch";
// import TempComp from "./TempComp"

function App() {
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
    <>
      <StopWatch />
      {/* <Component /> */}
      {/* <ComponentA /> */}
      {/* <DigitalClock /> */}
      {/* <UseEffectComponent2 /> */}
      {/* <UseEffectComponent /> */}
      {/* <ToDoList /> */}
      {/* <UpdateArrayOfObjects /> */}
      {/* <UpdateArrays /> */}
      {/* <UpdateObjectsState /> */}
      {/* <CounterWithUpdater /> */}
      {/* <ColorPicker /> */}
      {/* <ComponentOnChange /> */}
      {/* <Counter /> */}
      {/* <MyComponent /> */}
      {/* <ProfilePicture /> */}
      {/* {fruits.length > 0 && <List items={fruits} category="Fruits" />}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />} */}
      {/* <UserGreeting  isLoggedIn={true} username="Bonko" /> */}
      {/* <Student name="James" age={30} isStudent={true} />
    <Student name="Bob" age={43} isStudent={false} />
    <Student name="Kon" age={12} isStudent={true} />
    <Student name="Squid" age={50} isStudent={true} />
    <Student name="Larry" /> */}
      {/* <Button/> */}
      {/* <Card/>
    <Card/>
  <Card/> */}
      {/* <Header/>
      <Food/>
    <Footer/> */}

      {/* <TempComp /> */}
    </>
  );
}

export default App;
