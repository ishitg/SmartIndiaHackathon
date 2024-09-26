import React from "react";

function CollegeLogin() {
  return (
    <div className="college-login-container">
      <h1>College Registration</h1>
      <form className="amr-login-form">
          <label htmlFor="aishe">AISHE Code: </label>
         <input type="text" name="AISHE" id="aishe" placeholder="Code"/>
         <button>Check</button>
        <br />
         <label htmlFor="institute_name" >Institute Name: </label>
         <input type="text" name="institute_name" id="institute_name" placeholder="Name"/>
         <br />
         <label htmlFor="">Select State/City: </label>
          State: <select name="state" id="">
            <option value="">Maharashtra</option>
          </select>
          <br />
          City<select name="city" id="">
            <option value="">Nagpur</option>
          </select>

          <br />

          <label htmlFor="">Institute Faculty First Name: </label>
          <input type="text" />
          <br />
          <label htmlFor="">Institute Faculty Last Name: </label>
          <input type="text" />
          <br />

          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
          <br />
          <label htmlFor="phone">Phone: </label>
          <input type="tel" name="phone" id="phone" />
          <br />
          <label htmlFor="iic">IIC Institute Code (Optional): </label>
          <input type="text" name="iic" id="iic" />
          <br />
          <button type="submit">Register</button>
        </form>
    </div>
  );
}

export default CollegeLogin;
