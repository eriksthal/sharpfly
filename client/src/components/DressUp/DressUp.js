import React from "react";
import PropTypes from "prop-types";
// import { uniforms } from "../../constants/uniforms";
import { withStyles } from "@material-ui/core/styles";
// import { filterClassesForUniforms } from "../../utilities/utils";

import "./DressUp.css";

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

function DressUp(props) {
  return (
    <div>
      No uniform required All students are required to wear the appropriate
      dance clothing. Uniforms are not required for the summer session. If you
      wish you purchase our uniforms please contact Vancouver Dance Supply
      (located at the Arbutus location) for more information - 604.731.1362
    </div>
  );
  // return (
  //   <div>
  //     All students are required to wear the appropriate uniform as set by Dance
  //     Co. Dance Etc carries all required uniforms for purchase. There are
  //     specific styles required for different levels and disciplines. This
  //     uniform must be worn to classes and no other attire will be accepted.
  //     Students in the Competitive, Intensive, Company and Professional Half-Day
  //     divisions should purchase a minimum of two of each required item (ie:
  //     bodysuits, shorts, dance bras and skirts) and enough pairs of tights to
  //     ensure they have clean uniforms for every class. Please note that for all
  //     dance classes hair must be pulled back. A neat classical bun using
  //     hairspray, hairnets and bun pins for is required for Ballet. For all other
  //     classes a high, slicked back ponytail is acceptable. Dance Co will not
  //     supply hairnets, pins, hair spray, dance shoes, leotards or tights to
  //     students who have not brought these items to class. However, many of these
  //     items are sold at Vancouver Dance Supply. Students will be required to
  //     purchase these items if they do not bring them to class.
  //     <br />
  //     <strong>
  //       Competition dancers may be required to purchase a second pair of shoes
  //       for performances.
  //     </strong>
  //     {filterClassesForUniforms(props.selectedClasses).map(singleClass => {
  //       return (
  //         <div key={singleClass}>
  //           <hr />
  //           <p>{uniforms[singleClass].title}</p>
  //           <ul>
  //             {uniforms[singleClass].levels.map((level, i) => {
  //               return <li key={i}>{level}</li>;
  //             })}
  //           </ul>
  //           <p>{uniforms[singleClass].shoes}</p>
  //         </div>
  //       );
  //     })}
  //     <hr />
  //     <p>
  //       ALL CLASSES DANCE CO logo hoodies and warm ups may be worn at the
  //       beginning of class. DANCE CO sports bras are available for additional
  //       support.
  //     </p>
  //   </div>
  // );
}

DressUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DressUp);
