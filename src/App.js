import React, { useState } from "react";

import AddUserForm from "./component/AddUserForm";
import UserTable from "./component/UserTable";
import data from "./data/property.json";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [userProperties, setUserProperties] = useState(data);

  // function for adding user and there properties
  const addUser = (newUser) => {
    setUserProperties([...userProperties, newUser]);
  };

  // function for deleting the user and there properties
  const handleDeleteUser = (index) => {
    setUserProperties((prevUserProperties) => {
      const updatedUserProperties = [...prevUserProperties];
      updatedUserProperties.splice(index, 1);
      return updatedUserProperties;
    });
  };

  return (
    <div>
      <AddUserForm addUser={addUser} />
      <UserTable
        userProperties={userProperties}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default App;
