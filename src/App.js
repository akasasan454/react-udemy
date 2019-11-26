import React from "react";
import PropTypes from "prop-types";

function App() {
  const profiles = [
    { name: "Taro", age: 20 },
    { name: "Hanako", age: 12 },
    { name: "NoName", age: 23 }
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

// User.defaultProps = {
//   age: 100
// };

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

export default App;
