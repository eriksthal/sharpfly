import React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClassTable from '../../components/ClassTable/ClassTable';
import ClassFilter from '../../components/ClassFilter/ClassFilter';
import LiabilityWaiver from '../../components/LiabilityWaiver/LiabilityWaiver';
import Signature from '../../components/Signature/Signature';
import Spinner from '../../components/Spinner/Spinner';
import FinancialInformation from '../../components/FinancialInformation/FinancialInformation';
import PersonalInformation from '../../components/PersonalInformation/PersonalInformation';
import DressUp from '../../components/DressUp/DressUp';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {steps} from '../../constants/constants.js';
import { classesEndpoint, registrationEndpoint, termsEndpoint } from '../../constants/config.js';
import { findClassIdinArrayOfClasses } from '../../utilities/utils.js';

import './Registration.css';

const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class Registration extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      locationFilter: [],
      levelFilter: [],
      disciplineFilter: ["Ballet"],
      ageFilter: [],
      classes: [],
      filteredClasses: [],
      selectedClasses: [],
      terms: [],
      classesForUniform: [],
      firstName: '',
      lastName: '',
      birthdate: null,
      formattedBirthdate: '',
      streetAddress: '',
      city: 'none',
      postalCode: '',
      academicSchool: '',
      cellNumber: '',
      homeNumber: '',
      momsName: '',
      momsNumber: '',
      dadsName: '',
      dadsNumber: '',
      careCard: '',
      familyDoctorName: '',
      familyDoctorNumber: '',
      medicalConditions: '',
      waiverAccepted: false,
      isLoaded: false,
      studentEmail: '',
      primaryEmail: '',
      secondaryEmail: '',
      confirmationCode: '',
      agreementCheck: '',
      agreementName: '1234',
      agreementDate: '12345',
      agreementNumber: '1231321'
    };

  }

  componentDidMount() {
    this.setState({isLoaded: false});
    fetch(classesEndpoint)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          classes: result,
          isLoaded: true
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error);
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  updatePersonalInformation(e) {
    this.setState({personalInformation: e});
  }
  
  getValues(e) {
    this.setState({firstName: e.target.value});
  }

  handleNext = () => {
    if (this.state.activeStep === 0) {
      this.filterClasses();
    }
    
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));

    if (this.state.activeStep === steps.length-2) {
      this.completeRegistration(registrationEndpoint, this.state);
    }
    this.goToTop();
  };

  completeRegistration(endpoint, payload) {
    this.setState({isLoaded: false});
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({confirmationCode: result});
        this.setState({isLoaded: true});
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error);
        this.setState({isLoaded: true});

      }
    )
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

  handleBack = () => {
    if (this.state.activeStep === 1) {
      if (!window.confirm("By going back you'll lose your selection")) {
        return;
      }
        //Resets the selected classes
        this.setState({selectedClasses: [], classesForUniform: []});
    }
  
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
      this.goToTop();
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  filterLevels(singleClassLevels, levelFilter) {
    let flag = false;

    for (let level of levelFilter) {
      if(singleClassLevels.indexOf(level) > -1) {
        flag = true;
        break;
      }
    }
    
    return flag;
  }

  filterClasses() {
    console.log(this.state.classes);
    const filteredClasses = this.state.classes.filter((singleClass) => {
        const locationCondition = this.state.locationFilter.length > 0
          ? this.state.locationFilter.indexOf(singleClass.location) > -1 : true;
        const disciplineCondition = this.state.disciplineFilter.length > 0 
          ? this.state.disciplineFilter.indexOf(singleClass.discipline) > -1 : true;
        const levelCondition = this.state.levelFilter.length > 0
          ? this.filterLevels(singleClass.level, this.state.levelFilter) : true;
        const ageCondition = this.state.ageFilter.length > 0
          ? this.state.ageFilter.indexOf(singleClass.age) : true;
        return (locationCondition && disciplineCondition && levelCondition && ageCondition);
    });

    this.setState({filteredClasses});
  }

  handleDisciplineChange = event => {
    this.setState({ disciplineFilter: event.target.value });
  };    

  handleLevelChange(event) {
      this.setState({levelFilter: event.target.value});
  }

  handleLocationChange(event) {
      this.setState({locationFilter: event.target.value});
  }

  handleAgeChange(event) {
    this.setState({ageFilter: event.target.value});
}

  findKeyinArrayOfObjects(arrayOfObjects, value, key) {
    let valueFound = -1;
    
    arrayOfObjects.forEach((o, i)=>{
      if (o[key] === value) {
        valueFound = i;
        return;
      }
    });
    return valueFound;
  }

  handleClassSelect(event) {
    console.log(event.target.value);
      const valueAsArray = event.target.value.split("-");
      const selectedClass = {term: valueAsArray[0], classId: valueAsArray[1]};
      const key = this.findKeyinArrayOfObjects(this.state.selectedClasses, selectedClass.classId, 'classId');
      let newState = [...this.state.selectedClasses];

      if (key > -1) {
        newState.splice(key, 1);
      }
      if (selectedClass.term !== 'None') {
        newState.push(selectedClass);
      }

      this.setState({selectedClasses: newState});
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleBirthdateChange(birthdate) {
    this.setState({birthdate, formattedBirthdate: birthdate.toISOString().slice(0, 19).replace('T', ' ')});
  }

  handleStreetAddressChange(event) {
    this.setState({streetAddress: event.target.value});
  }

  handleCityChange(event) {
    this.setState({city: event.target.value});
  }

  handlePostalCodeChange(event) {
    this.setState({postalCode: event.target.value});
  }

  handleCellNumberChange(event) {
    this.setState({cellNumber: event.target.value});
  }

  handleHomeNumberChange(event) {
    this.setState({homeNumber: event.target.value});
  }

  handleAcademicSchoolChange(event) {
    this.setState({academicSchool: event.target.value});
  }

  handleMomsNameChange(event) {
    this.setState({momsName: event.target.value});
  }

  handleMomsNumberChange(event) {
    this.setState({momsNumber: event.target.value});
  }

  handleDadsNameChange(event) {
    this.setState({dadsName: event.target.value});
  }

  handleDadsNumberChange(event) {
    this.setState({dadsNumber: event.target.value});
  }

  handleWaiverAcceptedChange(event) {
    this.setState({waiverAccepted: event.target.checked});
  }

  handleCareCardChange(event) {
    this.setState({careCard: event.target.value});
  }

  handleFamilyDoctorNameChange(event) {
    this.setState({familyDoctorName: event.target.value});
  }

  handleFamilyDoctorNumberChange(event) {
    this.setState({familyDoctorNumber: event.target.value});
  }

  handleMedicalConditionsChange(event) {
    this.setState({medicalConditions: event.target.value});
  }

  handleStudentEmailChange(event) {
    this.setState({studentEmail: event.target.value});
  }

  handlePrimaryEmailChange(event) {
    this.setState({primaryEmail: event.target.value});
  }

  handleSecondaryEmailChange(event) {
    this.setState({secondaryEmail: event.target.value});
  }

  handleSignatureChange(signatureComponent) {
    this.setState({agreementCheck: signatureComponent.toDataURL()});
  }

  handleEditClasses(event) {
    this.setState({activeStep: parseInt(event.currentTarget.id)});
  }

  getSteps() {
    return steps;
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div className="registration__class-finder">
            <h1>Find your class</h1>
            <ClassFilter 
              handleDisciplineChange={this.handleDisciplineChange.bind(this)}
              handleLevelChange={this.handleLevelChange.bind(this)}
              handleLocationChange={this.handleLocationChange.bind(this)}
              handleAgeChange={this.handleAgeChange.bind(this)}
              disciplineFilter={this.state.disciplineFilter}
              levelFilter={this.state.levelFilter}
              locationFilter={this.state.locationFilter}
              ageFilter={this.state.ageFilter}
            />
          </div>
        );
      case 1:
        return (
          <div className="registration__class-finder">
            <h1>Select your classes</h1>
            <ClassTable 
              filteredClasses={this.state.filteredClasses} 
              selectedClasses={this.state.selectedClasses} 
              onClassSelect={this.handleClassSelect.bind(this)}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h1 style={{textAlign: 'center'}}>About you</h1>
            <PersonalInformation 
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              birthdate={this.state.birthdate}
              streetAddress={this.state.streetAddress}
              city={this.state.city}
              postalCode={this.state.postalCode}
              cellNumber={this.state.cellNumber}
              homeNumber={this.state.homeNumber}
              academicSchool={this.state.academicSchool}
              momsName={this.state.momsName}
              momsNumber={this.state.momsNumber}
              dadsName={this.state.dadsName}
              dadsNumber={this.state.dadsNumber}
              studentEmail={this.state.studentEmail}
              primaryEmail={this.state.primaryEmail}
              secondaryEmail={this.state.secondaryEmail}
              handleFirstNameChange={this.handleFirstNameChange.bind(this)}
              handleLastNameChange={this.handleLastNameChange.bind(this)}
              handleBirthdateChange={this.handleBirthdateChange.bind(this)}
              handleStreetAddressChange={this.handleStreetAddressChange.bind(this)}
              handleCityChange={this.handleCityChange.bind(this)}
              handlePostalCodeChange={this.handlePostalCodeChange.bind(this)}
              handleCellNumberChange={this.handleCellNumberChange.bind(this)}
              handleHomeNumberChange={this.handleHomeNumberChange.bind(this)}
              handleAcademicSchoolChange={this.handleAcademicSchoolChange.bind(this)}
              handleMomsNameChange={this.handleMomsNameChange.bind(this)}
              handleMomsNumberChange={this.handleMomsNumberChange.bind(this)}
              handleDadsNameChange={this.handleDadsNameChange.bind(this)}
              handleDadsNumberChange={this.handleDadsNumberChange.bind(this)}
              handleStudentEmailChange={this.handleStudentEmailChange.bind(this)}
              handlePrimaryEmailChange={this.handlePrimaryEmailChange.bind(this)}
              handleSecondaryEmailChange={this.handleSecondaryEmailChange.bind(this)}
              />
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Dress Up!</h1>
            <DressUp classesForUniform={this.state.classesForUniform} />
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Let's review some terms</h1>
            <LiabilityWaiver 
              careCard={this.state.careCard}
              familyDoctorName={this.state.familyDoctorName}
              familyDoctorNumber={this.state.familyDoctorNumber}
              medialConditions={this.state.medicalConditions}
              waiverAccepted={this.state.waiverAccepted}
              signatureString={this.state.signatureString}
              handleCareCardChange={this.handleCareCardChange.bind(this)}
              handleFamilyDoctorNameChange={this.handleFamilyDoctorNameChange.bind(this)}
              handleFamilyDoctorNumberChange={this.handleFamilyDoctorNumberChange.bind(this)}
              handleMedicalConditionsChange={this.handleMedicalConditionsChange.bind(this)}
              handleWaiverAcceptedChange={this.handleWaiverAcceptedChange.bind(this)}
              handleSignatureChange={this.handleSignatureChange.bind(this)}
            />
            <FinancialInformation />
            <Signature 
              signatureString={this.state.agreementCheck}
              handleSignatureChange={this.handleSignatureChange.bind(this)}
              />
          </div>
        );
      case 5:
        return (
          <div>
            <h1>Please review your information</h1>
            <p>Let's take a quick look at your information:</p>
            <h2>Classes:</h2>
            { this.state.classes.map((singleClass)=>{
              if (findClassIdinArrayOfClasses(singleClass.classId, this.state.selectedClasses)) {
                return <><p>{singleClass.discipline}</p><p>{singleClass.hours}</p></>;
              }
            })}
            <Button id={1} onClick={this.handleEditClasses.bind(this)}>Edit</Button>
            <div>
              <h2>Personal information:</h2>
              <p>First Name: {this.state.firstName}</p>
              <p>Last Name: {this.state.lastName}</p>
              <p>Birthdate: {this.state.formattedBirthdate}</p>
              <p>Street Address: {this.state.streetAddress}</p>
              <p>City: {this.state.city}</p>
              <p>Postal Code: {this.state.postalCode}</p>
              <p>Cell Number: {this.state.cellNumber}</p>
              <p>Home Number: {this.state.homeNumber}</p>
              <p>Academic School: {this.state.academicSchool}</p>
              <p>Parent/Guardian 1 Name: {this.state.momsName}</p>
              <p>Parent/Guardian 1 Number: {this.state.momsNumber}</p>
              <p>Parent/Guardian 2 Name: {this.state.dadsName}</p>
              <p>Parent/Guardian 2 Number: {this.state.dadsNumber}</p>
              <p>Student Email: {this.state.studentEmail}</p>
              <p>Primary Email: {this.state.primaryEmail}</p>
              <p>Secondary Email: {this.state.secondaryEmail}</p>
            </div>
          </div>
        );
      case 6:
      return (
        <div>
          <h1>You are all set!</h1>
          <p>Make sure to swing by the office before your first class and present the following code: </p>
          <h3>{this.state.confirmationCode}</h3>
          <p>We also emailed a copy to you at {this.state.primaryEmail}. Make sure to check your SPAM folder or Promotions folder.</p>
        </div>
      );
      default:
        return 'There was an error, please reload the page.';
    }
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;
    const { theme } = this.props;

    return (
      <>
      <div className={this.state.isLoaded ? 'registration__spinner hide': 'registration__spinner'}>
        <Spinner />
      </div>
      <div className={this.state.isLoaded ? classes.root : classes.root + ` hide`}>
        <div className='stepper'>
          <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
        </div>
        <div>
          <Typography component={'span'} className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
        </div>
        <div className="mobile-stepper">
          <MobileStepper
            steps={6}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            style={this.state.activeStep === steps.length - 1 ? {display: 'none'} : {}}
            nextButton={
              <Button 
                size="small" 
                
                onClick={this.handleNext}
                disabled={(activeStep === steps.length - 1) 
                  || (this.state.disciplineFilter.length === 0 
                    && this.state.locationFilter.length === 0 
                    && this.state.levelFilter.length === 0 )}
              >
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button 
                size="small" 
                onClick={this.handleBack} 
                disabled={activeStep === 0} 
              >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </div>
        <div className="stepper navigator">
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography component={'span'} className={classes.instructions}>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                  style={this.state.activeStep === steps.length - 1 ? {display: 'none'} : {}}
                >
                  Back
                </Button>
                <Button 
                  disabled={(this.state.disciplineFilter.length === 0 
                  && this.state.locationFilter.length === 0 
                  && this.state.levelFilter.length === 0)} 
                  style={this.state.activeStep === steps.length - 1 ? {display: 'none'} : {}}
                  variant="contained" 
                  color="primary" 
                  onClick={this.handleNext}>
                    {activeStep === steps.length - 2 ? 'Finish' : 'Next'}
                </Button>
              </div>
          )}
        </div>
      </div>
      </>
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Registration);