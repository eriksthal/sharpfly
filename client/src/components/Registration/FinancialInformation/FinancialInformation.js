import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

import "./FinancialInformation.css";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

function FinancialInformation(props) {
  return (
    <div>
      <h3>Please read and accept the following information:</h3>
      <p>
        To officially withdraw from a class the parent / legal guardian must
        complete and submit a Discontinuation form (available at our office) no
        later than October 31st.{" "}
        <strong>
          Verbal notification and non attendance are not considered automatic
          withdrawal
        </strong>
      </p>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement1}
          id="agreement1"
        />
        <div>
          <span style={{ display: "block" }}>
            Costume fees do not include any additional shoe, tight and accessory
            requirements. Parents/students will be responsible for the cost of
            these additional items. A video performance fee is included in your
            total fees which includes a digital video of the recital when
            available. Withdrawals for medical reasons must be accompanied by a
            Valid Doctor’s note. Medical withdrawals after October 31st will be
            credited the remaining tuition for future classes.{" "}
            <b>
              September to December term, Adult, Spring and Summer classes are
              non refundable.
            </b>{" "}
            Applications to transfer a student to a different class/time, for
            personal reasons, will incur a $50.00 administration fee per change
          </span>
        </div>
      </div>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement11}
          id="agreement11"
        />
        <span>
          One third of tuition and the registration fee are non-refundable upon
          registration and there are no refunds on any tution, costume or
          performance fees after October 31st.
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
          Payment arrangements are required at the time of registration. Payment
          can be made in full or monthly payments. For monthly payments, the
          registration fee and 1/3 of the tuition is required at registration
          and the reamining is split into 6 monthly payments starting September
          15th. Dance Co is authorized to process payments by credit card in
          accordance with the payment schedule. Monthly statements and invoices
          are not provided. As a courtesy, please inform us if your credit card
          expiration date changes. Transactions that are not able to process
          within two weeks of the scheduled payment date will be subject to a 2%
          late payment fee, accrued monthly until paid.
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
          Classes cancelled due to unsafe weather conditions, power outages, or
          any other unforeseeable emergencies will not be rescheduled and no
          refunds will be issued. Your dancers safety is our primary concern
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
          Students are to be picked up within 10 minutes of the end of their
          class. Failure to do so will result in late pick up fees.
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
            Three of more unexplained absences within each term may result in
            dismissal from class(es). NO REFUNDS WILL BE GIVEN.
          </strong>
        </span>
      </div>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement6}
          id="agreement6"
        />
        <span>
          Dance Co has a set standard dress code policy and it is mandatory for
          all dancers to wear the prescribed Dance Co uniform and shoes to ALL
          classes. Dance Co maintains a strict policy with regards to uniform,
          conduct and commitment. Students who arrive unprepared for class will
          be asked to observe class and will not be permitted to participate.
          Please refer to the Dance Co website for further details.
        </span>
      </div>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement7}
          id="agreement7"
        />
        <span>
          Cancellation: Dance Co reserves the right to cancel class at any time
          due to insufficient enrolment and/or change instructors when
          necessary. Dance Co reserves the right to have students photographed
          and used for publicity purposes, unless otherwise notified in writing.
        </span>
      </div>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement8}
          id="agreement8"
        />
        <span>
          Due to restrictions surrounding Covid -19, classes that are not able
          to happen in studio will take place online through zoom. Class
          schedules may need to shift by up to 30 minutes to accommodate ever
          evolving social distancing requirements. Refunds will not be given for
          classes that take place online due to social distancing restrictions.
        </span>
      </div>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement9}
          id="agreement9"
        />
        <span>
          <strong>
            I have read and understand the Dance Co policy and agree to its
            terms and conditions.
          </strong>
        </span>
      </div>
    </div>
  );
}

export default withStyles(styles)(FinancialInformation);
