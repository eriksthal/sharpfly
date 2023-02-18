import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CampTable from "../../components/Camps/CampTable/CampTable";
import CampsFilter from "../../components/Camps/CampsFilter/CampsFilter";
import CreditCard from "../../components/Shared/CreditCard/CreditCard";
import LiabilityWaiver from "../../components/Shared/LiabilityWaiver/LiabilityWaiver";
import InformationReview from "../../components/Shared/InformationReview/InformationReview";
import Signature from "../../components/Shared/Signature/Signature";
import Spinner from "../../components/Shared/Spinner/Spinner";
import CampsFinancialInformation from "../../components/Camps/CampsFinancialInformation/CampsFinancialInformation";
import PersonalInformation from "../../components/Shared/PersonalInformation/PersonalInformation";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { campSteps, costumePrices } from "../../constants/constants.js";
import { getPrice } from "../../utilities/utils.js";
import { campsEndpoint, registrationEndpoint } from "../../constants/config.js";
import {
  findClassIdinArrayOfClasses,
  findTermNameinArrayOfTerms,
} from "../../utilities/utils.js";

import "./Camps.css";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class Camps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      locationFilter: [],
      levelFilter: [],
      disciplineFilter: [],
      ageFilter: [],
      classes: [],
      filteredClasses: [],
      selectedClasses: [],
      terms: [],
      classesForUniform: [],
      firstName: "",
      lastName: "",
      birthdate: null,
      formattedBirthdate: "",
      streetAddress: "",
      city: "none",
      postalCode: "",
      academicSchool: "",
      cellNumber: "",
      homeNumber: "",
      momsName: "",
      momsNumber: "",
      dadsName: "",
      dadsNumber: "",
      careCard: "",
      familyDoctorName: "",
      familyDoctorNumber: "",
      medicalConditions: "",
      waiverGuardianName: "",
      waiverStudentName: "",
      isLoaded: false,
      studentEmail: "",
      primaryEmail: "",
      secondaryEmail: "",
      confirmationCode: "",
      ccName: "",
      ccNumber: "",
      ccExpiryMonth: "",
      ccExpiryYear: "",
      paymentTerm: "One payment",
      agreement1: false,
      agreement2: false,
      agreement3: false,
      agreement4: false,
      agreement5: false,
      agreement10: false,
      costumesTotal: 0,
      costumesSummary: { fees: [], pst: 0 },
      tuitionTotal: 0,
      gst: 0,
      pst: 0,
      grandTotal: 0,
      useCreditOnFile: false,
      registrationType: "Camp",
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: false });
    fetch(campsEndpoint)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            classes: result,
            isLoaded: true,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  validatePersonalInformation(fields) {
    let isValid = true;
    fields.forEach((field) => {
      if (
        this.state[field] === "" ||
        this.state[field] === "none" ||
        !this.state[field]
      ) {
        isValid = false;
      }
    });
    return isValid;
  }

  updatePersonalInformation(e) {
    this.setState({ personalInformation: e });
  }

  getValues(e) {
    this.setState({ firstName: e.target.value });
  }

  handleNext = () => {
    if (this.state.activeStep === 0) {
      this.filterClasses();
    }

    if (this.state.activeStep === 1) {
      if (this.state.selectedClasses.length === 0) {
        alert("Please select at least one camp");
        return;
      }
    }

    if (this.state.activeStep === 2) {
      if (
        !this.validatePersonalInformation([
          "firstName",
          "lastName",
          "birthdate",
          "formattedBirthdate",
          "streetAddress",
          "city",
          "postalCode",
          "academicSchool",
          "cellNumber",
          "homeNumber",
          "momsName",
          "momsNumber",
          "dadsName",
          "dadsNumber",
        ])
      ) {
        alert(
          "Please fill out all the fields. If it doesn't apply you can type N/A."
        );
        return;
      }
    }

    if (this.state.activeStep === 3) {
      const tuitionTotal = parseFloat(
        getPrice(this.state.selectedClasses)
      ).toFixed(2);
      const costumesSummary = this.getCostumesPrice();
      const costumesTotal = parseFloat(
        this.getCostumesFinalPrices(costumesSummary.fees)
      ).toFixed(2);
      const gst = tuitionTotal * +0.05;
      const pst = +0 * 0.07;
      const grandTotal = +tuitionTotal + +gst + pst;
      this.setState({
        tuitionTotal,
        costumesSummary,
        costumesTotal,
        gst,
        pst,
        grandTotal,
      });
      if (
        !this.validatePersonalInformation([
          "agreement1",
          "agreement2",
          "agreement3",
          "agreement4",
          "agreement5",
          "agreement10",
          "agreementCheck",
          "waiverGuardianName",
          "waiverStudentName",
          "careCard",
          "familyDoctorName",
          "familyDoctorNumber",
          "medicalConditions",
        ])
      ) {
        alert(
          "Please complete all the fields, accept all the terms and sign the form"
        );
        return;
      }
    }

    if (this.state.activeStep === 4) {
      if (
        !this.validatePersonalInformation([
          "ccName",
          "ccNumber",
          "ccExpiryMonth",
          "ccExpiryYear",
        ])
      ) {
        alert("Please complete your credit card information");
        return;
      }
    }

    this.setState((state) => ({
      activeStep: state.activeStep + 1,
    }));

    if (this.state.activeStep === campSteps.length - 2) {
      this.completeRegistration(registrationEndpoint, this.state);
    }
    this.goToTop();
  };

  completeRegistration(endpoint, payload) {
    this.setState({ isLoaded: false });
    fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ confirmationCode: result });
          this.setState({ isLoaded: true });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({ isLoaded: true });
        }
      );
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
      this.setState({ selectedClasses: [], classesForUniform: [] });
    }

    this.setState((state) => ({
      activeStep: state.activeStep - 1,
    }));
    this.goToTop();
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  filterSelection(ages, ageFilter) {
    const intersection = ages.filter(
      (value) => -1 !== ageFilter.indexOf(value)
    );
    return intersection.length > 0;
  }

  filterClasses() {
    const filteredClasses = this.state.classes.filter((singleClass) => {
      const locationCondition =
        this.state.locationFilter.length > 0
          ? this.state.locationFilter.indexOf(singleClass.location) > -1
          : true;
      const disciplineCondition =
        this.state.disciplineFilter.length > 0
          ? this.state.disciplineFilter.indexOf(singleClass.discipline) > -1
          : true;
      const levelCondition =
        this.state.levelFilter.length > 0
          ? this.filterSelection(singleClass.level, this.state.levelFilter)
          : true;
      const ageCondition =
        this.state.ageFilter.length > 0
          ? this.filterSelection(singleClass.ages, this.state.ageFilter)
          : true;
      return (
        locationCondition &&
        disciplineCondition &&
        levelCondition &&
        ageCondition
      );
    });

    this.setState({ filteredClasses });
  }

  handleDisciplineChange = (event) => {
    this.setState({ disciplineFilter: event.target.value });
  };

  handleLevelChange(event) {
    this.setState({ levelFilter: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ locationFilter: event.target.value });
  }

  handleAgeChange(event) {
    this.setState({ ageFilter: event.target.value });
  }

  findKeyinArrayOfObjects(arrayOfObjects, value, key) {
    let valueFound = -1;

    arrayOfObjects.forEach((o, i) => {
      if (o[key] === value) {
        valueFound = i;
        return;
      }
    });
    return valueFound;
  }

  handleClassSelect(event) {
    const valueAsArray = event.target.value.split("-");
    const selectedClass = {
      term: valueAsArray[0],
      classId: valueAsArray[1],
      classPrice: valueAsArray[2],
      classDiscipline: valueAsArray[3],
      noPerformance: valueAsArray[4],
    };
    const key = this.findKeyinArrayOfObjects(
      this.state.selectedClasses,
      selectedClass.classId,
      "classId"
    );
    let newState = [...this.state.selectedClasses];

    if (key > -1) {
      newState.splice(key, 1);
    }
    if (selectedClass.term !== "None") {
      newState.push(selectedClass);
    }

    this.setState({ selectedClasses: newState });
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleBirthdateChange(birthdate) {
    this.setState({
      birthdate,
      formattedBirthdate: birthdate
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    });
  }

  handleStreetAddressChange(event) {
    this.setState({ streetAddress: event.target.value });
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }

  handlePostalCodeChange(event) {
    this.setState({ postalCode: event.target.value });
  }

  handleCellNumberChange(event) {
    const isnum = /^\d+$/.test(event.target.value);
    if (isnum || event.target.value === "") {
      this.setState({ cellNumber: event.target.value });
    }
  }

  handleHomeNumberChange(event) {
    const isnum = /^\d+$/.test(event.target.value);
    if (isnum || event.target.value === "") {
      this.setState({ homeNumber: event.target.value });
    }
  }

  handleAcademicSchoolChange(event) {
    this.setState({ academicSchool: event.target.value });
  }

  handleMomsNameChange(event) {
    this.setState({ momsName: event.target.value });
  }

  handleMomsNumberChange(event) {
    const isnum = /^\d+$/.test(event.target.value);
    if (isnum || event.target.value === "") {
      this.setState({ momsNumber: event.target.value });
    }
  }

  handleDadsNameChange(event) {
    this.setState({ dadsName: event.target.value });
  }

  handleDadsNumberChange(event) {
    const isnum = /^\d+$/.test(event.target.value);
    if (isnum || event.target.value === "") {
      this.setState({ dadsNumber: event.target.value });
    }
  }

  handleCareCardChange(event) {
    this.setState({ careCard: event.target.value });
  }

  handleFamilyDoctorNameChange(event) {
    this.setState({ familyDoctorName: event.target.value });
  }

  handleFamilyDoctorNumberChange(event) {
    const isnum = /^\d+$/.test(event.target.value);
    if (isnum || event.target.value === "") {
      this.setState({ familyDoctorNumber: event.target.value });
    }
  }

  handleMedicalConditionsChange(event) {
    this.setState({ medicalConditions: event.target.value });
  }

  handleWaiverGuardianNameChange(event) {
    this.setState({ waiverGuardianName: event.target.value });
  }

  handleWaiverStudentNameChange(event) {
    this.setState({ waiverStudentName: event.target.value });
  }

  handleStudentEmailChange(event) {
    this.setState({ studentEmail: event.target.value });
  }

  handlePrimaryEmailChange(event) {
    this.setState({ primaryEmail: event.target.value });
  }

  handleSecondaryEmailChange(event) {
    this.setState({ secondaryEmail: event.target.value });
  }

  handleSignatureChange(signatureComponent) {
    this.setState({ agreementCheck: signatureComponent.toDataURL() });
  }

  handleClearSignature() {
    this.setState({ agreementCheck: "" });
  }

  handleEditClasses(event) {
    this.setState({ activeStep: parseInt(event.currentTarget.id) });
  }

  handleCcNumberChange(event) {
    const isnum = /^\d+$/.test(event.target.value);
    if (isnum || event.target.value === "") {
      this.setState({ ccNumber: event.target.value });
    }
  }

  handleCcNameChange(event) {
    this.setState({ ccName: event.target.value });
  }

  handleCcExpiryMonthChange(event) {
    const isnum = /^\d+$/.test(event.target.value);
    if (isnum || event.target.value === "") {
      this.setState({ ccExpiryMonth: event.target.value.substring(0, 2) });
    }
  }

  handleTermChange(event) {
    this.setState({ paymentTerm: event.target.value });
  }

  handleAgreementChange(event) {
    this.setState({ [event.target.id]: !this.state[event.target.id] });
  }

  handleCcExpiryYearChange(event) {
    const isnum = /^\d*$/.test(event.target.value);

    if (isnum || event.target.value === "") {
      this.setState({ ccExpiryYear: event.target.value.substring(0, 2) });
    }
  }

  getCostumesPrice() {
    let largestAge = 0;
    let pst = 0;
    let arrayOfFees = [];
    let senior = true;
    this.state.classes.forEach((singleClass) => {
      if (
        findClassIdinArrayOfClasses(
          singleClass.classId,
          this.state.selectedClasses
        )
      ) {
        singleClass.ages.forEach((age) => {
          if (costumePrices[age] > largestAge) {
            largestAge = costumePrices[age];
          }
          if (singleClass.ages.indexOf("Senior (15+ years)") > -1 && senior) {
            pst += 145.0 * 0.07;
            senior = false;
          }
        });
        senior = true;
        arrayOfFees.push({
          discipline: singleClass.discipline,
          price: parseFloat(largestAge).toFixed(2),
        });
        largestAge = 0;
      }
    });
    pst = pst.toFixed(2);
    return { fees: arrayOfFees, pst: pst };
  }

  getCostumesFinalPrices(arrayOfCostumes) {
    let costumePriceCounter = 0;
    arrayOfCostumes.forEach((costume) => {
      costumePriceCounter += parseFloat(costume.price);
    });
    return parseFloat(costumePriceCounter).toFixed(2);
  }

  getSteps() {
    return campSteps;
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div className="registration__class-finder">
            <h1>Find your camp</h1>
            <CampsFilter
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
            <h1>Select your camps</h1>
            <CampTable
              filteredClasses={this.state.filteredClasses}
              selectedClasses={this.state.selectedClasses}
              onClassSelect={this.handleClassSelect.bind(this)}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h1 style={{ textAlign: "center" }}>About your dancer</h1>
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
              handleStreetAddressChange={this.handleStreetAddressChange.bind(
                this
              )}
              handleCityChange={this.handleCityChange.bind(this)}
              handlePostalCodeChange={this.handlePostalCodeChange.bind(this)}
              handleCellNumberChange={this.handleCellNumberChange.bind(this)}
              handleHomeNumberChange={this.handleHomeNumberChange.bind(this)}
              handleAcademicSchoolChange={this.handleAcademicSchoolChange.bind(
                this
              )}
              handleMomsNameChange={this.handleMomsNameChange.bind(this)}
              handleMomsNumberChange={this.handleMomsNumberChange.bind(this)}
              handleDadsNameChange={this.handleDadsNameChange.bind(this)}
              handleDadsNumberChange={this.handleDadsNumberChange.bind(this)}
              handleStudentEmailChange={this.handleStudentEmailChange.bind(
                this
              )}
              handlePrimaryEmailChange={this.handlePrimaryEmailChange.bind(
                this
              )}
              handleSecondaryEmailChange={this.handleSecondaryEmailChange.bind(
                this
              )}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Let's review some terms</h1>
            <LiabilityWaiver
              careCard={this.state.careCard}
              familyDoctorName={this.state.familyDoctorName}
              familyDoctorNumber={this.state.familyDoctorNumber}
              medicalConditions={this.state.medicalConditions}
              waiverAccepted={this.state.waiverAccepted}
              signatureString={this.state.signatureString}
              handleCareCardChange={this.handleCareCardChange.bind(this)}
              handleFamilyDoctorNameChange={this.handleFamilyDoctorNameChange.bind(
                this
              )}
              handleFamilyDoctorNumberChange={this.handleFamilyDoctorNumberChange.bind(
                this
              )}
              handleMedicalConditionsChange={this.handleMedicalConditionsChange.bind(
                this
              )}
              handleWaiverGuardianNameChange={this.handleWaiverGuardianNameChange.bind(
                this
              )}
              handleWaiverStudentNameChange={this.handleWaiverStudentNameChange.bind(
                this
              )}
              waiverGuardianName={this.state.waiverGuardianName}
              waiverStudentName={this.state.waiverStudentName}
              agreement10={this.state.agreement10}
              handleAgreementChange={this.handleAgreementChange.bind(this)}
            />
            <CampsFinancialInformation
              agreement1={this.state.agreement1}
              agreement2={this.state.agreement2}
              agreement3={this.state.agreement3}
              agreement4={this.state.agreement4}
              agreement5={this.state.agreement5}
              handleAgreementChange={this.handleAgreementChange.bind(this)}
            />
            <Signature
              signatureString={this.state.agreementCheck}
              handleSignatureChange={this.handleSignatureChange.bind(this)}
              handleClearSignature={this.handleClearSignature.bind(this)}
            />
          </div>
        );
      case 4:
        return (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div>
              <InformationReview
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                birthdate={this.state.birthdate}
                streetAddress={this.state.streetAddress}
                city={this.state.city}
                postalCode={this.state.postalCode}
                cellNumber={this.state.cellNumber}
                homeNumber={this.state.homeNumber}
                academicSchool={this.state.academicSchool}
                parentOneName={this.state.momsName}
                parentOneNumber={this.state.momsNumber}
                parentTwoName={this.state.dadsName}
                parentTwoNumber={this.state.dadsNumber}
                studentEmail={this.state.studentEmail}
                primaryEmail={this.state.primaryEmail}
                secondaryEmail={this.state.secondaryEmail}
                handleEditPersonalInformation={this.handleEditClasses.bind(
                  this
                )}
              />
            </div>
            <div>
              <Paper
                className="information-review__paper_container"
                elevation={1}
              >
                <h2>Your selected Camps:</h2>
                <ul>
                  {this.state.classes.map((singleClass) => {
                    const selectedClass = findClassIdinArrayOfClasses(
                      singleClass.classId,
                      this.state.selectedClasses
                    );
                    if (selectedClass.length > 0) {
                      return (
                        <li
                          style={{ marginBottom: "10px" }}
                          key={singleClass.classId}
                        >
                          {`${singleClass.discipline}
                        ${singleClass.ages.join("/")}`}
                          <br />
                          {singleClass.location}
                          <br />
                          {singleClass.hours}
                          <br />
                          {
                            findTermNameinArrayOfTerms(
                              selectedClass[0].term,
                              singleClass.terms
                            )[0].termName
                          }
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
                <Button
                  id={1}
                  variant="contained"
                  color="primary"
                  onClick={this.handleEditClasses.bind(this)}
                >
                  Edit
                </Button>
                <h2>Subtotal:</h2>
                <p>
                  <strong>Tuition: </strong>
                  {`$ ${this.state.tuitionTotal} CAD`}
                </p>
                <p>
                  <strong>GST: </strong>${parseFloat(this.state.gst).toFixed(2)}{" "}
                  CAD
                </p>
                {/* <p>
                  <strong>PST: </strong>${parseFloat(this.state.pst).toFixed(2)}{" "}
                  CAD
                </p> */}
                <h2>Total: </h2>
                <h3>${parseFloat(this.state.grandTotal).toFixed(2)} CAD</h3>
                <div />
              </Paper>
              <Paper
                className="information-review__paper_container"
                elevation={1}
              >
                <h1>Payment Information</h1>
                <CreditCard
                  number={this.state.ccNumber}
                  name={this.state.ccName}
                  expiryMonth={this.state.ccExpiryMonth}
                  expiryYear={this.state.ccExpiryYear}
                  handleNumberChange={this.handleCcNumberChange.bind(this)}
                  handleNameChange={this.handleCcNameChange.bind(this)}
                  handleExpiryMonthChange={this.handleCcExpiryMonthChange.bind(
                    this
                  )}
                  handleExpiryYearChange={this.handleCcExpiryYearChange.bind(
                    this
                  )}
                />
              </Paper>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="all-done__container">
            <h1>All done!</h1>
            <p>
              Thank you for registering via our online registration. We are
              excited to have you dancing with us for the 2022/23 Season!
            </p>
            <p>
              We will charge one third of your total fees to the supplied credit
              card number and a receipt will be emailed to you upon completion.
              The remainder of the fees are divided into 6 monthly payments
              starting September 23rd.
            </p>
            <p>
              Please note if you have registered for a Sept-December Preschool
              Beginner Classes all fees are non-refundable. For all other full
              year courses, 1/3 of tuition fees and the full registration fee is
              non-refundable. After October 31st, no other refunds will be
              given.
            </p>
            <p>
              Please{" "}
              <a
                href="https://dancecofiles.s3.us-east-2.amazonaws.com/2019-20+Calendar.xls"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>{" "}
              for the 2019/2020 Season Calendar which outlines important dates
              in our year.
            </p>
            <p>
              <ul>
                <li>
                  Classes begin the week of Monday September 9th – Sunday
                  September 15th
                </li>
                <li>
                  Please take a look at the above Calendar for a full list of
                  studio events and closures.{" "}
                </li>
              </ul>
            </p>
            <p>
              Dance Co students are required to wear the appropriate Dance Co
              Uniform and shoes for dance class. For more information on
              uniforms{" "}
              <a
                href="https://dancecofiles.s3.us-east-2.amazonaws.com/2019+Dance+Co+Uniform+Requirements+.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                click here
              </a>
              .
            </p>
            <p>
              Vancouver Dance Supply, our store is located right next to our
              Arbutus location in the Arbutus Mall. They stock everything you
              need, and will be happy assist you. DANCE ETC | 604-731-1362 |
              <a href="mailto:info@danceetc.ca">info@danceetc.ca</a>
            </p>
            <p>
              If you have any questions, please reach out to us at 604.736.3394
              or <a href="mailto:info@danceco.com">info@danceco.com</a>
            </p>
            <p>
              We emailed a copy of this information to you at{" "}
              {this.state.primaryEmail}. Make sure to check your SPAM or
              Promotions folder.
            </p>
            <p>We look forward to dancing with you this year!</p>
            <p>
              Reference code: DCO-
              {this.state.confirmationCode}R
            </p>
          </div>
        );
      default:
        return "There was an error, please reload the page.";
    }
  }

  render() {
    // const { classes } = this.props;
    // const campSteps = this.getSteps();
    // const { activeStep } = this.state;
    // const { theme } = this.props;

    return (
      <h1 style={{ textAlign: "center" }}>
        Our registration is currently closed.
      </h1>
      // <>
      //   <div
      //     className={
      //       this.state.isLoaded
      //         ? "registration__spinner hide"
      //         : "registration__spinner"
      //     }
      //   >
      //     <Spinner />
      //   </div>
      //   <div
      //     className={
      //       this.state.isLoaded ? classes.root : classes.root + ` hide`
      //     }
      //   >
      //     <div className="stepper">
      //       <Stepper activeStep={activeStep} alternativeLabel>
      //         {campSteps.map((label) => (
      //           <Step key={label}>
      //             <StepLabel>{label}</StepLabel>
      //           </Step>
      //         ))}
      //       </Stepper>
      //     </div>
      //     <div>
      //       <Typography component={"span"} className={classes.instructions}>
      //         {this.getStepContent(activeStep)}
      //       </Typography>
      //     </div>
      //     <div className="mobile-stepper">
      //       <MobileStepper
      //         steps={6}
      //         position="static"
      //         activeStep={activeStep}
      //         className={classes.mobileStepper}
      //         style={
      //           this.state.activeStep === campSteps.length - 1
      //             ? { display: "none" }
      //             : {}
      //         }
      //         nextButton={
      //           <Button
      //             size="small"
      //             onClick={this.handleNext}
      //             disabled={
      //               activeStep === campSteps.length - 1 ||
      //               (this.state.disciplineFilter.length === 0 &&
      //                 this.state.locationFilter.length === 0 &&
      //                 this.state.levelFilter.length === 0)
      //             }
      //           >
      //             Next
      //             {theme.direction === "rtl" ? (
      //               <KeyboardArrowLeft />
      //             ) : (
      //               <KeyboardArrowRight />
      //             )}
      //           </Button>
      //         }
      //         backButton={
      //           <Button
      //             size="small"
      //             onClick={this.handleBack}
      //             disabled={activeStep === 0}
      //           >
      //             {theme.direction === "rtl" ? (
      //               <KeyboardArrowRight />
      //             ) : (
      //               <KeyboardArrowLeft />
      //             )}
      //             Back
      //           </Button>
      //         }
      //       />
      //     </div>
      //     <div className="stepper navigator">
      //       {this.state.activeStep === campSteps.length ? (
      //         <div>
      //           <Typography component={"span"} className={classes.instructions}>
      //             All steps completed
      //           </Typography>
      //           <Button onClick={this.handleReset}>Reset</Button>
      //         </div>
      //       ) : (
      //         <div>
      //           <Button
      //             disabled={activeStep === 0}
      //             onClick={this.handleBack}
      //             className={classes.backButton}
      //             style={
      //               this.state.activeStep === campSteps.length - 1
      //                 ? { display: "none" }
      //                 : {}
      //             }
      //           >
      //             Back
      //           </Button>
      //           <Button
      //             disabled={
      //               this.state.locationFilter.length === 0 &&
      //               this.state.ageFilter.length === 0 &&
      //               this.state.disciplineFilter.length === 0
      //             }
      //             style={
      //               this.state.activeStep === campSteps.length - 1
      //                 ? { display: "none" }
      //                 : {}
      //             }
      //             variant="contained"
      //             color="primary"
      //             onClick={this.handleNext}
      //           >
      //             {activeStep === campSteps.length - 2 ? "Finish" : "Next"}
      //           </Button>
      //         </div>
      //       )}
      //     </div>
      //   </div>
      // </>
    );
  }
}

Camps.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Camps);
