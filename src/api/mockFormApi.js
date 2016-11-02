import delay from './delay';

const administration = {
    Guid: 'sample',
    Company_Guid: 'string',
    Country_Id: '1',
    AdministrationType: '2',
    AdministrationTypeName: 'string',
    VATNumberType: '1',
    CompanyCode: 'string',
    Address1: 'string',
    BuildingNumber: 'string',
    Address2: 'string',
    PostalCode: 'string',
    City: 'string',
    TradingNames: 'string',
    HeadOfficeCountry: 'string',
    EmailAddress: 'string',
    Website: 'string',
    ContactName: 'string',
    IBAN: 'string',
    BIC: 'string',
    NationalTaxNumber: 'string',
    StatisticalOfficeNumber: 'string',
    TaxOfficeName: 'string',
    TaxOfficeAddress: 'string',
    TaxOfficePostalCode: 'string',
    TaxOfficeCity: 'string',
    TaxOfficeId: 'string',
    FilingNumber: 'string',
    LoginName: 'string',
    Password: 'string',
    IsEligibleForEUScheme: true,
    IsEligibleForNonEUScheme: true,
    IsRegisteredForVATInEU: true,
    StartDate: 'string',
    DateOfRequest: 'string',
    DateOfRegistration: 'string',
    IsVATGroup: true,
    HasCertificate: true,
    CertificateUploadDateString: 'string'
}

const countries = [
  {
    Id: 1,
    Name: 'Argentina'
  },
  {
    Id: 2,
    Name: 'Brasil'
  },
  {
    Id: 3,
    Name: 'Chile'
  },
  {
    Id: 4,
    Name: 'Colombia'
  }];

class CalendarApi {
  static loadAdministration(guid) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, administration));
      }, delay);
    });
  }

  static getCountries(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, countries));
      }, delay);
    });
  }

  static getCompanies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, countries));
      }, delay);
    });
  }
}

export default CalendarApi;
