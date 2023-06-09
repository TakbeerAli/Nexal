import React, { useState } from "react";
import "./AddUserForm.css";
const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location1, setLocation1] = useState("");
  const [unitSize1, setUnitSize1] = useState("");
  const [location2, setLocation2] = useState("");
  const [unitSize2, setUnitSize2] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    // Validate age
    if (!age.trim()) {
      errors.age = "Age is required";
    }
    // Validate location
    if (!location1.trim()) {
      errors.location1 = "Location is required";
    }
    // Validate unit size
    if (!unitSize1.trim()) {
      errors.unitSize1 = "unit size is required";
    }

    if (!location2.trim()) {
      errors.location2 = "location is required";
    }

    if (!unitSize2.trim()) {
      errors.unitSize2 = "unit is required";
    }

    setErrors(errors);

    // Return true if the form is valid (no errors)
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Create a new user object with the form data
      const newUser = {
        name: name,
        age: age,
        properties: [
          {
            location: location1,
            unit_size: unitSize1,
          },
          {
            location: location2,
            unit_size: unitSize2,
          },
        ],
      };

      // Pass the new user object to the addUser function
      addUser(newUser);

      // Reset the form fields
      setName("");
      setAge("");
      setLocation1("");
      setUnitSize1("");
      setLocation2("");
      setUnitSize2("");
      // Form is valid, perform further actions (e.g., submit form data)
      console.log("Form submitted");
    } else {
      // Form is invalid, display error messages
      console.log("Form contains errors");
    }
  };

  return (
    <div className="form_Page">
      <h1>Add User & Properties</h1>
      <form onSubmit={handleSubmit}>
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>

        <div className="row mt-2">
          <div>Property 1</div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder=" Property 1 Location"
              value={location1}
              onChange={(e) => setLocation1(e.target.value)}
            />

            {/* if input is empty show error */}
            {errors.location1 && (
              <span className="error">{errors.location1}</span>
            )}
          </div>

          <div class="col">
            <input
              type="text"
              class="form-control"
              value={unitSize1}
              placeholder="unit size 1"
              onChange={(e) => setUnitSize1(e.target.value)}
            />

            {/* if input is empty show error */}
            {errors.unitSize1 && (
              <span className="error">{errors.unitSize1}</span>
            )}
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>

        <div className="row mt-2">
          <div>Property 2</div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Property 2 Location"
              value={location2}
              onChange={(e) => setLocation2(e.target.value)}
            />

            {/* if input is empty show error */}
            {errors.location2 && (
              <span className="error">{errors.location2}</span>
            )}
          </div>

          <div class="col">
            <input
              type="text"
              class="form-control"
              value={unitSize2}
              placeholder="unit size 2"
              onChange={(e) => setUnitSize2(e.target.value)}
            />

            {/* if input is empty show error */}
            {errors.unitSize2 && (
              <span className="error">{errors.unitSize2}</span>
            )}
          </div>

          <div className="col"></div>
          <div className="col"></div>
        </div>

        <button type="submit" class="btn btn-primary mt-3">
          Save Record
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
