import * as actionType from './constants/filingAuditsConstants';

export default function FilingAuditReducer(state = initialState, payload) {

    switch (payload.type) {
        case actionType.FETCH_FILING_AUDITS:
            return Object.assign({}, state, {
                IsFetching: true
            });
        case actionType.FILING_AUDITS_FETCHED:
            return Object.assign({}, state, {
                IsFetching: false,
                FilingAudits: payload.FilingAudits,
                FilteredFilingAudits: payload.FilingAudits,
                DateFormat: payload.DateFormat
            });
        case actionType.RESET_FILTER_FILING_AUDITS:

            return Object.assign({}, state, {
                FilteredFilingAudits: state.FilingAudits,
                Filters: {ToDate: null, FromDate: null}
            });
        case actionType.FILTER_FILING_AUDITS:

            if (payload.date.ToDate && payload.date.FromDate) {
                let filteredAudits = state.FilingAudits.filter(audit => {
                    let date = audit.TransmissionDetails.FormattedTransmissionDate.split(/\s+/g);
                    let auditDate = parseDate(date[0]);

                    return auditDate >= payload.date.FromDate && auditDate <= payload.date.ToDate;
                });

                return Object.assign({}, state, {
                    FilteredFilingAudits: filteredAudits,
                    Filters: {ToDate: payload.date.ToDate, FromDate: payload.date.FromDate}
                });
            } else if (payload.date.FromDate) {
                let filteredAudits = state.FilingAudits.filter(audit => {
                    let date = audit.TransmissionDetails.FormattedTransmissionDate.split(/\s+/g);
                    let auditDate = parseDate(date[0]);

                    return auditDate >= payload.date.FromDate;
                });

                return Object.assign({}, state, {
                    FilteredFilingAudits: filteredAudits,
                    Filters: {ToDate: payload.date.ToDate, FromDate: payload.date.FromDate}
                });
            } else if (payload.date.ToDate) {
                let filteredAudits = state.FilingAudits.filter(audit => {
                    let date = audit.TransmissionDetails.FormattedTransmissionDate.split(/\s+/g);
                    let auditDate = parseDate(date[0]);

                    return auditDate <= payload.date.ToDate;
                });

                return Object.assign({}, state, {
                    FilteredFilingAudits: filteredAudits,
                    Filters: {ToDate: payload.date.ToDate, FromDate: payload.date.FromDate}
                });
            }
            break;
        default:
            return state;
    }
}



const initialState = {
    DateRange: {
        ToDate: null,
        FromDate: null
    },
    FilingAudits: [
        {
            CompanyName: 'Company',
            CountryCode: 'GB',
            Errors: 'The VRN specified  was not found.',
            ReportType: 'VAT Report',
            ReportingPeriod: '02/01/2016 - 02/29/2016',
            TrackingNumber: 'ac06532c-a03b-4716-bef8-9bca77e2ed09',
            TransmissionDetails: {
                FormattedTransmissionDate: '08/22/2016 04:47:07 PM'
            },
            UserFullName: 'Inter pulse'
        }, {
            CompanyName: 'RodrigoTestCompany',
            CountryCode: 'ARG',
            Errors: '',
            ReportType: 'VAT Report',
            ReportingPeriod: '02/01/2016 - 02/29/2016',
            TrackingNumber: 'ac06532c-a03b-4716-bef8-9bca77e2ed09',
            TransmissionDetails: {
                FormattedTransmissionDate: '08/21/2016 04:47:07 PM'
            },
            UserFullName: 'rbazan'
        }
    ],
    FilteredFilingAudits: [
        {
            CompanyName: 'Company',
            CountryCode: 'GB',
            Errors: 'The VRN specified  was not found.',
            ReportType: 'VAT Report',
            ReportingPeriod: '02/01/2016 - 02/29/2016',
            TrackingNumber: 'ac06532c-a03b-4716-bef8-9bca77e2ed09',
            TransmissionDetails: {
                FormattedTransmissionDate: '08/22/2016 04:47:07 PM'
            },
            UserFullName: 'Inter pulse'
        }, {
            CompanyName: 'RodrigoTestCompany',
            CountryCode: 'ARG',
            Errors: '',
            ReportType: 'VAT Report',
            ReportingPeriod: '02/01/2016 - 02/29/2016',
            TrackingNumber: 'ac06532c-a03b-4716-bef8-9bca77e2ed09',
            TransmissionDetails: {
                FormattedTransmissionDate: '08/21/2016 04:47:07 PM'
            },
            UserFullName: 'rbazan'
        }
    ],
    Filters: {
        FromDate: null,
        ToDate: null
    }

};

export function parseDate(input) {
  let parts;
  if (input.indexOf('-') !== -1) {
    parts = input.split('-');
    return new Date(parts[2], parts[1] - 1, parts[0]);
  } else {
    parts = input.split('/');
    return new Date(parts[2], parts[0] - 1, parts[1]);
  }
}