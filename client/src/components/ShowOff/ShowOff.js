import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import './ShowOff.css';

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
  
function ShowOff(props) {
    return (
        <div>
            The opportunity for you to show your skills will take place at our annual recital: 
            <div style={{display: 'flex'}}>
                <div>
                    <Icon style={{marginLeft: '-20px', paddingBottom: '10px', fontSize: '80px'}}>date_range</Icon>
                </div>
                <div>
                    <h2>Recital 2020</h2>
                    <h3>May 19 - 24, 2020</h3>
                </div>
            </div>
            
        </div>
    );
}

ShowOff.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowOff);


