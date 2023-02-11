import React from "react";

// https://www.geeksforgeeks.org/what-is-usestate-how-it-has-been-used-to-validate-input-values/?ref=rp
export default class App extends React.Component {
  state = {
    fields: {},
    errors: {},
  };
  //method to validate values
  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name check if name is empty or not
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }
    //name should not contain special char
    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email should not be empty
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    //validating email
    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  //after submit form it will be called
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) alert("form submitted successfully");
  };

  //updating the field value
  handleUpdate(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div style={{ margin: 200 }}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleUpdate.bind(this, "name")}
            value={this.state.fields["name"]}
          />
          <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
          <br />
          <input
            type="text"
            placeholder="Email"
            onChange={this.handleUpdate.bind(this, "email")}
            value={this.state.fields["email"]}
          />
          <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
          <br />
          <button type="submit">click</button>
        </form>
      </div>
    );
  }
}
