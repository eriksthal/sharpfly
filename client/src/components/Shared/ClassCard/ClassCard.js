import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";

import "./ClassCard.css";

const styles = (theme) => ({
  card: {
    maxWidth: 300,
    // padding: '20px 40px 20px 40px',
    minHeight: "500px",
    backgroundColor: "#efefef",
    position: "relative",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <div
        className={
          props.selected
            ? "class-card__ribbon-wrapper class-card__selected"
            : "class-card__ribbon-wrapper"
        }
      >
        <div className="class-card__ribbon">Selected</div>
      </div>
      <CardContent style={{ padding: "20px 20px 0 20px" }}>
        <Typography
          style={{
            fontSize: "25px",
            fontWeight: "400",
            color: "black",
            textAlign: "center",
          }}
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.name}
        </Typography>
        <Divider component="div" />
        <div style={{ minHeight: "170px" }}>
          <div className="class-card__icon-splitter">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <Icon style={{ fontSize: "20px" }}>date_range</Icon>
            </div>
            <Typography style={{ fontSize: "15px" }}>{props.time}</Typography>
          </div>
          <div className="class-card__icon-splitter">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <Icon style={{ fontSize: "20px" }}>location_on</Icon>
            </div>
            <Typography component="p">{props.location}</Typography>
          </div>
          <div className="class-card__icon-splitter">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <Icon style={{ fontSize: "20px" }}>person</Icon>
            </div>
            <div>
              {props.level.map((level, i) => {
                return (
                  <div style={{ marginRight: "10px" }} key={i}>
                    {level}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="class-card__icon-splitter">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <Icon style={{ fontSize: "20px" }}>cake</Icon>
            </div>
            <div>
              {props.ages.map((age, i) => {
                return (
                  <div style={{ marginRight: "10px" }} key={i}>
                    {age}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Divider component="div" />
      </CardContent>
      <CardActions>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select a term</FormLabel>
          <RadioGroup
            aria-label="Term"
            name="gender1"
            className={classes.group}
            value={props.selectedTerm}
            onChange={props.onClick}
          >
            <FormControlLabel
              value={`None-${props.value}`}
              control={<Radio />}
              label="I am not interested in this class"
            />
            {props.terms.map((term) => {
              return (
                <FormControlLabel
                  key={term.termId}
                  value={`${term.termId}-${props.value}-${term.termPrice}-${
                    props.discipline
                  }-${props.noPerformance}`}
                  control={<Radio />}
                  label={`${term.termName} ($${term.termPrice} CAD)`}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
