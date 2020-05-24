import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

import "./FinancialInformation.css";

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

function FinancialInformation(props) {
  return (
    <div>
      <h3>Please read and accept the following information:</h3>
      {/* 
      <p>
        Fees Class fees are comprised of tuition according to class length, a
        recital costume (not applicable for technique classes), one registration
        fee per child, and sales tax. Fees do not include the mandatory Dance Co
        uniform. Payment January Program fees may be divided into two
        installments and confirmed by the office staff after you reserve your
        dancer's space in the class. Upon Registration: 1/2 of the total fees,
        including GST March 15th: 1/2 of the total fees, including GST
      </p>
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement1}
          id="agreement1"
        />
        <span>
          To officially withdraw a student from a class the parent/legal
          guardian must complete & submit a Discontinuation Form (available at
          the office) no later than February 15th/ Verbal notification and
          non-attendance are not considered automatic withdrawal.
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
          January - June classes are non-refundable. No refunds on any tuition,
          costume and performance fees will be given. Costume fees do not
          include any additional shoe, tight or accessory requirements.
          Parents/students will be responsible for the cost of these additional
          items. A performance fee is included in your total fees. This fee
          includes a deposit to be used towards your ticket purchase for the
          Year End Recital and a digital copy of each show when available.
          Withdrawals for medical reasons must be accompanied by a valid
          doctor's note. Medical withdrawals after February 15th will be
          credited remaining tuition for future classes. January - June, Adult,
          Spring and Summer classes are non-refundable. . Applications to
          transfer a student to a different class/time, for personal reason,
          will incur a $50.00 administration fee per change
        </span>
      </div> */}
      <div className="financial-information__acceptable-term">
        <Checkbox
          onClick={props.handleAgreementChange}
          value={props.value}
          checked={props.agreement3}
          id="agreement3"
        />
        <span>
          Payment arrangements are required at the time of registration. Dance
          Co is authorized to process payments by credit card or post-dated
          cheques in accordance with the payment schedule above. Monthly
          statements and invoices are not provided. As a courtesy, please inform
          us if your credit card expiration date changes. An administration fee
          of $50 will be applied to NSF cheques. Transactions that are not able
          to process within 2 weeks of the scheduled payment date will be
          subject to a 2% late payment fee, accrued monthly until paid.{" "}
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
          Three or more unexplained absences within each term may result in
          dismissal from class(es). NO REFUNDS WILL BE GIVEN
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
          Dance Co has a set standard dress code policy and it is mandatory for
          all dancers to wear the prescribed Dance Co uniform to ALL classes.
          Dance Co maintains strict policy with regards to uniform, conduct &
          commitment. Please refer to the Dance Co brochure for further details.{" "}
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
          checked={props.agreement7}
          id="agreement7"
        />
        <span>
          I have read and understood the Dance Co policy and agree to its terms
          and conditions.
        </span>
      </div>
    </div>
  );
}

export default withStyles(styles)(FinancialInformation);
