import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './DressUp.css';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});
  
function DressUp(props) {
    return (
        <div>
            All students are required to wear the appropriate uniform as set by Dance Co. Dance Etc carries all required uniforms for
            purchase. There are specific styles required for different levels and disciplines. This uniform must be worn to classes and no
            other attire will be accepted. Students in the Competitive, Intensive, Company and Professional Half-Day divisions should
            purchase a minimum of two of each required item (ie: bodysuits, shorts, dance bras and skirts) and enough pairs of tights to
            ensure they have clean uniforms for every class.
            Please note that for all dance classes hair must be pulled back. A neat classical bun using hairspray, hairnets and bun pins for is
            required for Ballet. For all other classes a high, slicked back ponytail is acceptable. Dance Co will not supply hairnets, pins, hair
            spray, dance shoes, leotards or tights to students who have not brought these items to class. However, many of these items are
            sold at Dance Etc. Students will be required to purchase these items if they do not bring them to class.
            <br/><strong>Competition dancers may be required to purchase a second pair of shoes for performances.</strong>
        </div>
    );
}

DressUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DressUp);


