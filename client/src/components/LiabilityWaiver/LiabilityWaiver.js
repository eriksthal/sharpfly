import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

import "./LiabilityWaiver.css";

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

class LiabilityWaiver extends React.Component {
  render() {
    const classes = this.props.classes;
    const props = this.props;
    return (
      <div>
        Dear Dancer and/or Parent (or Guardian), We put safety as our top
        priority and we strive to ensure the safety of both the dancers and the
        Dance Co staff. However, despite precautions, accidents and injuries can
        occur. By signing this release form, you (meaning the dancer and
        parent/guardian) assume all risks related to the use of any and all
        spaces and equipment for the purpose of the Dance Co programs and
        events, on or outside the Dance Co premises, including but not limited
        to the online programs offered by Dance Co, and agree to release and
        hold harmless Dance Co, including its teachers and all its staff members
        and officers, as well as the facilities used by Dance Co and any other
        facilities used for the purpose of the Dance Co programs, including the
        facilities and equipment used at your own discretion during the online
        training and classes, from any cause of action, claims or demands of any
        nature whatsoever, now and in the future. At times, students may be
        assigned to classes which will take place at both our studios, as well
        as online classes and training, and will participate in different events
        on or outside the Dance Co premises. Please read carefully and sign the
        following waiver form:
        <hr />
        <h3>Liability Waiver Form</h3>
        <p>
          In consideration of me and my child being permitted to participate in
          the Dance Co programs and activities, the undersigned, appreciating
          any possible dangers, hazards, or injuries inherent in the Dance Co
          programs, activities and transportation between the Studios and
          to/from different events which are part of the Dance Co programs,
          hereby assumes the risks and responsibilities surrounding my or my
          child’s participation in the foregoing programs, activities,
          transportation or other activities, including but not limited to the
          online training and events, as an adjunct hereto; and further, I, for
          myself, my heirs, and personal representative(s) hereby defend, hold
          harmless, indemnify, release and forever discharge Dance Co and all
          its owners, agents, employees and any other staff members from and
          against any and all claims, demands and actions or causes of actions
          on account of damage to property or personal injury, which may result
          in my or my child’s participation in such programs, activities and
          transportation during and outside the Dance Co Classes and on or
          outside the Dance Co premises, including but not limited to the online
          classes and other events.
        </p>
        <p>
          Furthermore, I/we agree to obey the Dance Co Studios and facility
          rules, as well as any rule that may apply to participating in the
          Dance Co programs, both on and outside the Dance Co premises, included
          but not limited to the online programs offered by Dance Co, and take
          full responsibility for any damage I/we may cause to the Studios and
          facilities in use during participating to the Dance programs. In the
          event that I/we should observe any unsafe personal conduct or unsafe
          physical condition during the Classes, I/we agree to report the unsafe
          conduct or condition to a staff member as soon as possible.{" "}
        </p>
        <p>
          I/we further understand and agree that I/we give this release freely,
          voluntarily, and in the consideration of me or my child being granted
          permission to participate in the Dance Co programs and activities,
          including but not limited to the online classes and training. I/we
          also agree that this Release and Liability Waiver shall be effective
          whether or nor I/we have in force any policy of insurance to cover me
          or my child for injuries which may arise from participation in the
          Dance Co programs, activities and transportation, including but not
          limited to the online classes and training. If I/we do not have any
          such policy in effect, then I/we personally assume and agree to pay
          for the loss or damage occasioned from said activities during the
          period of my or my child’s participation, and I/we expressly agree not
          to look to Dance Co. for reimbursement for any such loss or damage.
          I/we do agree that Dance Co can obtain the medical care for my child
          that the staff deems suitable, should it prove to be necessary.
        </p>
        <div className="liability-waiver__waiver-form">
          <TextField
            id="standard-name"
            label="Care Card #"
            className={classes.textField}
            value={props.careCard}
            onChange={props.handleCareCardChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Family Doctor's Name"
            className={classes.textField}
            value={props.familyDoctorName}
            onChange={props.handleFamilyDoctorNameChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Family Doctor's Number"
            className={classes.textField}
            value={props.familyDoctorNumber}
            onChange={props.handleFamilyDoctorNumberChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            multiline={true}
            rows={2}
            placeholder="Please list all health concerns, learning disabilities, injuries or allergies"
            label="Existing medical conditions"
            className={classes.textField}
            value={props.medicalConditions}
            onChange={props.handleMedicalConditionsChange}
            margin="normal"
          />
        </div>
        <div className="liability-waiver__acceptable-term">
          <Checkbox
            onClick={props.handleAgreementChange}
            value={props.value}
            checked={props.agreement8}
            id="agreement8"
          />
          <span>
            I/we do hereby unconditionally release and forever discharge any and
            all claims, demands, actions, and causes of action whatsoever
            arising from, or in any manner connected with, or growing out of the
            use in any manner whatsoever, of the pictures and sound taken by
            Dance Co for internal or external use coverage/production, internal
            or external media, including but not limited to publications,
            website, videos, and presentations.
          </span>
        </div>
        <div className="liability-waiver__waiver-form">
          <TextField
            id="standard-name"
            label="Participant Name"
            className={classes.textField}
            value={props.waiverStudentName}
            onChange={props.handleWaiverStudentNameChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Parent/Guardian Name"
            className={classes.textField}
            value={props.waiverGuardianName}
            onChange={props.handleWaiverGuardianNameChange}
            margin="normal"
          />
        </div>
      </div>
    );
  }
}

LiabilityWaiver.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LiabilityWaiver);
