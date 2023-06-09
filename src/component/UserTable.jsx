import React from "react";
import "./userTable.css";

const UserTable = ({ userProperties, onDeleteUser }) => {
  if (userProperties.length === 0) {
    return <p>No user & properties to display.</p>;
  }
  return (
    <div className="property_Table">
      <h1> Users & there Properties</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Properties</th>
            <th scope="col">unit_size</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userProperties.map((user, index) =>
            user.properties.map((property, propertyIndex) => (
              <tr key={`${index}-${propertyIndex}`}>
                {propertyIndex === 0 && (
                  <>
                    <td rowSpan={user.properties.length}>{user.name}</td>
                    <td rowSpan={user.properties.length}>{user.age}</td>
                  </>
                )}
                <td>
                  {propertyIndex + 1}) {property.location}
                </td>
                <td>{property.unit_size}</td>
                {propertyIndex === 0 && (
                  <>
                    <td rowSpan={user.properties.length}>
                      <button
                        className="btn btn-warning"
                        onClick={() => onDeleteUser(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
