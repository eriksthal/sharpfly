import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

import "./CampsFinancialInformation.css";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function CampsFinancialInformation(props) {
  return (
    <div>
      <h3>Please read and accept the following information:</h3>
      <p>
        To officially withdraw from a class the parent/legal guardian must
        complete & submit a Discontinuation Form (available at the office).
        Verbal notification and non-attendance are not considered automatic
        withdrawal.
      </p>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement1}
          id="agreement1"
        />
        <span>
          Summer programs & classes are non-refundable. Withdrawals for medical
          reasons must be accompanied by a valid doctor's note. Medical
          withdrawals will be credited remaining tuition for future classes.
          Applications to transfer a student to a different class/program, for
          personal reason, will incure a $25.00 administration fee per change.
        </span>
      </div>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement2}
          id="agreement2"
        />
        <span>
          Payment arrangements are required at the time of registration. Dance
          Co is authorized to process the payment by credit card or cheques in
          accordance with the above. An administration fee of $50 will be
          applied to NSF cheques.
        </span>
      </div>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement3}
          id="agreement3"
        />
        <span>
          Students are not required to wear the standard Dance Co uniform during
          summer programs. All students should wear appropriate dance clothing
          and shoes for varying disciplines. Please refer to the Dance Co
          brochure for further details.
        </span>
      </div>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement4}
          id="agreement4"
        />
        <span>
          Cancellation: Dance Co reserves the right to cancel class at any time
          due to insufficient enrollment. Dance Co reserves the right to have
          students photographed and used for publicity purposes, unless
          otherwise notified in writing.
        </span>
      </div>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement5}
          id="agreement5"
        />
        <span>
          <strong>
            I have read and understood the Dance Co policy and agree to its
            terms and conditions.
          </strong>
        </span>
      </div>
    </div>
  );
}

export default withStyles(styles)(CampsFinancialInformation);
