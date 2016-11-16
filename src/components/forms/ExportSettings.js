import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
// import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { FileUpload } from 'material-ui/svg-icons/file/file-upload';
import UploadField from './FileUpload';

import {
  DatePicker,
  SelectField,
  Checkbox,
  TextField
} from 'redux-form-material-ui';


/**
 * This modal contains a form to add a new return for a previously selected country.
 */

const styles = {
  inline: { display: 'inline-block', width: '20%' },
  block: { display: 'block' },
  label: { fontSize: '14px' },
  width: { maxWidth: 280 },
  gutter: { marginBottom: '30px' },
  padding: { paddingBottom: '20px', paddingLeft: 20 },
  firstCol: { width: '50%', display: 'inline-block' },
  secondCol: { width: '50%', display: 'inline-block', verticalAlign: 'top' }
};

const populateCompanies = (company, index) => {
  return <MenuItem value={company.Country_Id} key={index + 1} primaryText={company.Name} />;
};

const populateAdminTypes = (adminType, index) => {
  return <MenuItem value={adminType.Id} key={index + 1} primaryText={adminType.Name} />;
};

let ExportSettings = props => {

  return (
    <div style={styles.padding}>
      <form onSubmit={props.handleSubmit}>

        {/*<Field name="CheckAll" label="Select All" component={Checkbox} />

          <Field name="CompanySettings" label="Company Settings" component={Checkbox} />

          <Field name="AccountSettings" label="Account Settings" component={Checkbox} />

          <Field name="AnalysisAndAnalysisPlans" label="Analysis and analysis plans" component={Checkbox} />

          <Field name="ReconciliationAndReconciliationPlans" label="Reconciliation and reconciliation plans" component={Checkbox} />

          <Field name="DataMergeRules" label="Data merge rules" component={Checkbox} />

          <Field name="ImportProfiles" label="Import profiles" component={Checkbox} />

          <Field name="ReportTemplates" label="ReportTemplates" component={Checkbox} />

          <Field name="OtherListingReportTemplates" label="Other listing report templates" component={Checkbox} />

          <Field name="LookupTables" label="Lookup tables" component={Checkbox} value={props.CheckAll}/>

          <Field name="Users" label="Users" component={Checkbox} />*/}

        {/*<Field name="checkAll" component={RadioButtonGroup}>
          <RadioButton value="0" label="Not Import" style={styles.inline} />
          <RadioButton value="1" label="Overwrite" style={styles.inline} />
          <RadioButton value="2" label="Insert" style={styles.inline} />
        </Field>

        <Field name="AccountSettings" component={RadioButtonGroup}>
          <RadioButton value="0" label="Not Import" style={styles.inline} />
          <RadioButton value="1" label="Overwrite" style={styles.inline} />
          <RadioButton value="2" label="Insert" style={styles.inline} />
        </Field>

        <Field name="CompanySettings" component={RadioButtonGroup} valueSelected={'0'}>
          <RadioButton value="0" label="Not Import" style={styles.inline} />
          <RadioButton value="1" label="Overwrite" style={styles.inline} />
          <RadioButton value="2" label="Insert" style={styles.inline} />
        </Field>*/}

        <br />
        <fieldset>
          <legend>General Information</legend>
          <div>
            <Field name="Country_Id" component={SelectField} floatingLabelText="Country">
              <MenuItem value={null} primaryText=" " />
              {props.countries.map(populateCompanies)}
            </Field>
          </div>

          <div>
            <Field name="AdministrationType" component={SelectField} floatingLabelText="Administration Type">
              <MenuItem value={null} primaryText=" " />
              {props.adminTypes.map(populateAdminTypes)}
            </Field>
          </div>

          <Field name="VATNumber" component={TextField} floatingLabelText="Administration Type" />

          <div>
            <Field name="VATNumberType" component={SelectField} floatingLabelText="VAT Number Type">
              <MenuItem value={null} primaryText=" " />
              {props.vatNumberTypes.map(populateAdminTypes)}
            </Field>
          </div>

          <Field name="CompanyCode" component={TextField} floatingLabelText="Company Code" />

        </fieldset>
        <br />
        <fieldset style={styles.firstCol}>
          <legend>Location Information - Company HQ</legend>

          <Field name="Address1" component={TextField} floatingLabelText="Address 1" style={styles.block} />
          <Field name="BuildingNumber" component={TextField} floatingLabelText="Building Number" style={styles.block} />
          <Field name="Address2" component={TextField} floatingLabelText="Address 2" style={styles.block} />
          <Field name="PostalCode" component={TextField} floatingLabelText="Postal Code" style={styles.block} />
          <Field name="City" component={TextField} floatingLabelText="City" style={styles.block} />
          <Field name="Region" component={TextField} floatingLabelText="Region" style={styles.block} />
          <Field name="TradingNames" component={TextField} floatingLabelText="Trading Names" style={styles.block} />
          <Field name="HeadOfficeCountry" component={TextField} floatingLabelText="Head Office Country" style={styles.block} />
          <Field name="EmailAddress" component={TextField} floatingLabelText="Email Address" style={styles.block} />
          <Field name="Website" component={TextField} floatingLabelText="Website" style={styles.block} />
          <Field name="ContactName" component={TextField} floatingLabelText="Contact Name" style={styles.block} />
          <Field name="IBAN" component={TextField} floatingLabelText="IBAN" style={styles.block} />
          <Field name="BIC" component={TextField} floatingLabelText="BIC" style={styles.block} />
        </fieldset>

        <fieldset style={styles.secondCol}>
          <legend>Location Information - Fiscal Representative</legend>

          <Field name="LocationNameAndSurname" component={TextField} floatingLabelText="Company Name or Name and Surname" style={styles.block} />
          <Field name="LocationAdress" component={TextField} floatingLabelText="Address" style={styles.block} />
          <Field name="LocationPostalCode" component={TextField} floatingLabelText="Postal Code" style={styles.block} />
          <Field name="Place" component={TextField} floatingLabelText="Place" style={styles.block} />
          <Field name="NIPID" component={TextField} floatingLabelText="NIP ID" style={styles.block} />
          <Field name="REGONID" component={TextField} floatingLabelText="REGON ID" style={styles.block} />

        </fieldset>
        <br />
        <fieldset style={styles.firstCol}>
          <legend>Filing Information</legend>

          <Field name="NationalTaxNumber" component={TextField} floatingLabelText="National Tax Number" style={styles.block} />
          <Field name="StatisticalOfficeNumber" component={TextField} floatingLabelText="Statistical Office Number" style={styles.block} />
          <Field name="ChamberOfCommerce" component={TextField} floatingLabelText="Chamber of Commerce" style={styles.block} />
          <Field name="TaxOfficeName" component={TextField} floatingLabelText="Tax office name" style={styles.block} />
          <Field name="TaxOfficeAddress" component={TextField} floatingLabelText="Tax office Address" style={styles.block} />
          <Field name="TaxOfficePostalCode" component={TextField} floatingLabelText="Tax office Postal Code" style={styles.block} />
          <Field name="TaxOfficeCity" component={TextField} floatingLabelText="Tax office City" style={styles.block} />
          <Field name="TaxOfficeId" component={TextField} floatingLabelText="Tax office id Names" style={styles.block} />
          <Field name="FilingNumber" component={TextField} floatingLabelText="Filing Number" style={styles.block} />
          <Field name="LoginName" component={TextField} floatingLabelText="Login Name" style={styles.block} />
          <Field name="Password" component={TextField} floatingLabelText="Password" style={styles.block} />

          {/*<Field name="Certificate" component={UploadField} type="file" label="Certificate" required/>*/}
        </fieldset>
        <fieldset style={styles.secondCol}>
          <legend>Applicant Information</legend>

          <Field name="NameAndSurname" component={TextField} floatingLabelText="Name & Surname" style={styles.block} />
          <Field name="Phone" component={TextField} floatingLabelText="Phone" style={styles.block} />
          <Field name="FaxNumber" component={TextField} floatingLabelText="Fax Number" style={styles.block} />
          <Field name="EmailAddress" component={TextField} floatingLabelText="Email Address" style={styles.block} />
          <Field name="CustomsNumber" component={TextField} floatingLabelText="Customs Number" style={styles.block} />

        </fieldset>
        <br />
        <fieldset>
          <legend>MOSS Information</legend>
          <div style={styles.width}>
            <Field name="IsEligibleForEUScheme" component={Checkbox} label="Eligible for EU Scheme" labelPosition="left" />
            <Field name="IsEligibleForNonEUScheme" component={Checkbox} label="Eligible for Non-EU Scheme" labelPosition="left" style={{ marginTop: '14px', marginBottom: '14px' }} />
            <Field name="IsRegisteredForVATInEU" component={Checkbox} label="Is registered for VAT in EU" labelPosition="left" />
          </div>
          <Field name="StartDate" component={DatePicker} floatingLabelText="Date of commencement" />
          <Field name="DateofRequest" component={DatePicker} floatingLabelText="Date of request" />
          <Field name="DateOfRegistration" component={DatePicker} floatingLabelText="Date of registration" />
          <div style={styles.width}>
            <Field name="IsVATGroup" component={Checkbox} label="VAT group" labelPosition="left" style={{ marginTop: '14px', marginBottom: '14px' }} />
          </div>
        </fieldset>

        <RaisedButton label="Save" type="submit" primary />
        <RaisedButton label="Cancel" type="button" secondary />
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  const requiredFields = ['Certificate'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};
/*eslint-disable */
ExportSettings = reduxForm({
  form: 'ExportSettings'
  // a unique identifier for this form
})(ExportSettings);

// Decorate with connect to read form values
ExportSettings = connect(
  (state) => {
    return {
      initialValues: state.administration
    };
  }
)(ExportSettings);
/*eslint-enable */
export default ExportSettings;
