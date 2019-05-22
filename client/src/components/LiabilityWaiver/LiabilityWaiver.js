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
        Dear Dancers and/or Parent (or Guardian), We put safety as one of our
        top priorities and we will strive to ensure each dancer’s safety.
        However, despite precautions, accidents and injuries can occur. By
        signing this release form, you (meaning the dancer and parent/guardian)
        assume all risks related to the use of any and all spaces used by Dance
        Co and agree to release and hold harmless Dance Co, including its
        teachers and its staff members as well as the facilities used by Dance
        Co, from any cause of action, claims or demands or any nature
        whatsoever, now and in the future.
        <hr />
        <h3>Liability Waiver Form</h3>
        In consideration of me and my child being permitted to participate in
        Dance Co programs and activities, the undersigned, appreciating any
        possible dangers, hazards, or injuries inherent in Dance Co programs and
        activities, hereby assumes the risks and responsibilities surrounding my
        or my child’s participation in the foregoing programs and activities or
        other activities as an adjunct hereto; and further, I, for myself, my
        heirs, and personal representatives(s) hereby defend, hold harmless,
        indemnify, release and forever discharge Dance Co and all its owners,
        agents, employees and any other staff members from and against any and
        all claims, demands and actions or causes of actions on account of
        damage to property or personal injury, which may result in my or my
        child’s participation in such programs and activities during and outside
        the Dance Co Classes and on the Dance Co premises. Furthermore, I/we
        agree to obey the Dance Co Studio and facility rules and take full
        responsibility for any damage I/we may cause to the Studios and
        facilities in use by Dance Co. In the event that I/we should observe any
        unsafe personal conduct or unsafe physical condition during the Classes,
        I/we agree to report the unsafe conduct or condition to a Staff member
        as soon as possible. I/we further understand and agree that I/we give
        this release freely, voluntarily, and in the consideration of me or my
        child being granted permission to participate in the Dance Co programs
        and activities. I/we also agree that this Release and Liability Waiver
        shall be effective whether or not I/we have in force any policy of
        insurance to cover me or my child for injuries which may arise from
        participation in Dance Co studios and activities. If I/we do not have
        any such policy in effect, then I/we personally assume and agree to pay
        for the loss or damage occasioned from said activities during the period
        of my child’s participation, and I/we expressly agree not to look to
        Dance Co. for reimbursement for any such loss or damage. I/we do agree
        that Dance Co can obtain the medical care for my child that the staff
        deems suitable, should it prove to be necessary.
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
            onClick={props.handleWaiverAcceptedChange}
            value={props.value}
            checked={props.waiverAccepted}
          />
          <span>
            I/we do hereby unconditionally release and forever discharge any and
            all claims, demands, actions, and causes of action whatsoever
            arising from, or in any manner connected with, or growing out of the
            use in any manner whatsoever, of the pictures and sound of me taken
            by Dance Co for internal or external use coverage/production,
            internal or external media, including but not limited to
            publications, website, videos, and presentations. (To be signed by
            participants 18 years of age or older, other wise your parent or
            guardian must sign)
          </span>
        </div>
        <div className="liability-waiver__waiver-form">
          <TextField
            id="standard-name"
            label="Participant Name"
            className={classes.textField}
            value={props.participantName}
            onChange={props.handleParticipantName}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Parent/Guardian Name"
            className={classes.textField}
            value={props.guardianName}
            onChange={props.handleGuardianName}
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
