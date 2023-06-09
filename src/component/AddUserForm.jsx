import React, { useState } from "react";
import "./AddUserForm.css";
import InputField from "./InputField";
const AddUserForm = ({ addUser }) => {
  // 1 useState for all data
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
    location1: "",
    unitSize1: "",
    location2: "",
    unitSize2: "",
  });
  const { name, age, location1, unitSize1, location2, unitSize2 } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  //state for the errors
  const [errors, setErrors] = useState({});

  // function for validation of the inputs field
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
      setInputValue({
        name: "",
        age: "",
        location1: "",
        unitSize1: "",
        location2: "",
        unitSize2: "",
      });

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
            <InputField
              type="text"
              value={name}
              placeholder=" Name"
              label="Name"
              name="name"
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div class="col">
            <InputField
              type="text"
              value={age}
              placeholder="Age"
              label="Age"
              name="age"
              onChange={handleChange}
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>

        <div className="row mt-2">
          <div>Property 1</div>
          <div class="col">
            <InputField
              type="text"
              value={location1}
              placeholder="location 1 of property"
              label="location1"
              name="location1"
              onChange={handleChange}
            />

            {/* if input is empty show error */}
            {errors.location1 && (
              <span className="error">{errors.location1}</span>
            )}
          </div>

          <div class="col">
            <InputField
              type="text"
              value={unitSize1}
              placeholder=" unit size 1"
              label="unitSize1"
              name="unitSize1"
              onChange={handleChange}
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
            <InputField
              type="text"
              value={location2}
              placeholder="Property 2 location"
              label="location2"
              name="location2"
              onChange={handleChange}
            />

            {/* if input is empty show error */}
            {errors.location2 && (
              <span className="error">{errors.location2}</span>
            )}
          </div>

          <div class="col">
            <InputField
              type="text"
              value={unitSize2}
              placeholder="unit size 2"
              label="unitSize2"
              name="unitSize2"
              onChange={handleChange}
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
