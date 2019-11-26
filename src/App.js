import React from "react";

function App() {
  const profiles = [
    { name: "Taro", age: 20 },
    { name: "Hanako", age: 12 },
    { name: "NoName" }
  ];
  return (
    <React.Fragment>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </React.Fragment>
  );
}

const User = props => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age} year old!
    </div>
  );
};

User.defaultProps = {
  age: 100
};

export default App;
