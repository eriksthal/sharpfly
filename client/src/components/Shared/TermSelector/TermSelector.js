import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import "./TermSelector.css";

function TermSelector(props) {
  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Term Selector"
          name="termSelector"
          value={props.paymentTerm}
          onChange={props.handleTermChange}
        >
          <FormControlLabel
            value="One payment"
            control={<Radio />}
            label="One payment in full"
          />
          <FormControlLabel
            value="Monthly Payments"
            control={<Radio />}
            label="Monthly payments"
            disabled={props.multipleTerms ? false : true}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default TermSelector;
