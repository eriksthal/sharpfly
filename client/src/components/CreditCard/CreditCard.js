import React from "react";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";

import "./CreditCard.css";

function CreditCard(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="credit-card__field-container">
        <Icon className="credit-card__field-container-icon">person</Icon>
        <TextField
          id="ccName"
          label="Cardholder Name"
          value={props.name}
          onChange={props.handleNameChange}
          margin="normal"
        />
      </div>
      <div className="credit-card__field-container">
        <Icon className="credit-card__field-container-icon">payment</Icon>
        <TextField
          id="ccNumber"
          label="Credit Card Number"
          value={props.number}
          onChange={props.handleNumberChange}
          margin="normal"
        />
      </div>
      <div className="credit-card__field-container">
        <Icon className="credit-card__field-container-icon">date_range</Icon>
        <TextField
          id="ccNumber"
          style={{ width: "70px" }}
          label="mm"
          value={props.expiryMonth}
          onChange={props.handleExpiryMonthChange}
          margin="normal"
          maxLength="2"
        />
        <TextField
          id="ccNumber"
          style={{ width: "70px" }}
          label="yy"
          value={props.expiryYear}
          onChange={props.handleExpiryYearChange}
          margin="normal"
          maxLength="2"
        />
      </div>
    </div>
  );
}

export default CreditCard;
