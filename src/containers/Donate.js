import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Divider } from "semantic-ui-react";
import { donate } from "../actions/kids";

class Donate extends Component {
  donate = () => {
    this.props
      .donate(this.state)
      .then({})
      .catch(error => {
        console.log(error);
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form method={"post"} action={"/api/donate"}>
        <Form.Group widths="equal">
          <Form.Field
            label="Amount"
            id={"amount"}
            onChange={this.onChange}
            control="input"
            placeholder="Enter amount to donate here..."
            name={"amount"}
          />
        </Form.Group>
        <p id="loading" />
        <Button
          type="submit"
          color={"green"}
          size={"huge"}
          onClick={e => {
            if (!document.getElementById("amount").value) {
              e.preventDefault();
              document.getElementById("loading").innerText = "Enter a value...";
            } else {
              document.getElementById("loading").innerText =
                "Redirecting to paypal...";
            }
          }}
        >
          Donate
        </Button>
        <Divider hidden />
      </Form>
    );
  }
}

export default connect(
  null,
  { donate }
)(Donate);
