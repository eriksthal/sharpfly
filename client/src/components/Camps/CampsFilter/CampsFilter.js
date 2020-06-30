import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import { english } from "../../../constants/languages";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { locationsEndpoint, campAgesEndpoint } from "../../../constants/config";

import "./CampsFilter.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 330
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 280
    }
  }
};

class CampsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationFilter: [],
      disciplineFilter: [],
      levelFilter: [],
      ageFilter: [],
      disciplines: [
        { disciplineId: 11, disciplineName: "Spring Camp" },
        { disciplineId: 12, disciplineName: "Summer Camp" }
      ],
      locations: [],
      ages: []
    };
    this.controller = new AbortController();
    this.signal = this.controller.signal;
  }

  componentDidMount() {
    this.retrieve(locationsEndpoint, "locations");
    this.retrieve(campAgesEndpoint, "ages");
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  retrieve(endpoint, element) {
    fetch(endpoint, {
      method: "GET",
      signal: this.signal
    })
      .then(res => res.json())
      .then(
        result => {
          if (result && !this.signal.aborted) {
            this.setState({
              [element]: result
            });
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          if (!this.signal.aborted) {
            this.setState({
              isLoaded: true
            });
            console.log(error);
          }
        }
      );
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className="class-filter__paper" elevation={1}>
        <div className="class-filter__filter-main-wrapper">
          <div className="class-filter__filter-container">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">
                {english.season_filter_text}
              </InputLabel>
              <Select
                multiple
                value={this.props.disciplineFilter}
                onChange={this.props.handleDisciplineChange}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
                className="class-filter__select"
              >
                {this.state.disciplines.map(discipline => (
                  <MenuItem
                    key={discipline.disciplineId}
                    value={discipline.disciplineName}
                  >
                    <Checkbox
                      checked={
                        this.props.disciplineFilter.indexOf(
                          discipline.disciplineName
                        ) > -1
                      }
                    />
                    <ListItemText primary={discipline.disciplineName} />
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText id="select-disciplines">
                Select all the seasons you are interested in
              </FormHelperText>
            </FormControl>
          </div>
          <div className="class-filter__filter-container">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="location">
                {english.location_filter_text}
              </InputLabel>
              <Select
                multiple
                value={this.props.locationFilter}
                onChange={this.props.handleLocationChange}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
                className="class-filter__select"
              >
                {this.state.locations.map(location => (
                  <MenuItem
                    key={location.locationId}
                    value={location.locationName}
                  >
                    <Checkbox
                      checked={
                        this.props.locationFilter.indexOf(
                          location.locationName
                        ) > -1
                      }
                    />
                    <ListItemText primary={location.locationName} />
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText id="select-location">
                Select all the locations you are interested in
              </FormHelperText>
            </FormControl>
          </div>
          <div className="class-filter__filter-container">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age">{english.age_filter_text}</InputLabel>
              <Select
                multiple
                value={this.props.ageFilter}
                onChange={this.props.handleAgeChange}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
                className="class-filter__select"
              >
                {this.state.ages.map(age => (
                  <MenuItem key={age.ageId} value={age.ageName}>
                    <Checkbox
                      checked={this.props.ageFilter.indexOf(age.ageName) > -1}
                    />
                    <ListItemText primary={age.ageName} />
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText id="select-ages">
                Select all the ages you are interested in
              </FormHelperText>
            </FormControl>
          </div>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CampsFilter);
