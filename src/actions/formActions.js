import CalendarApi from '../api/mockFormApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadAdministrationSuccess = (administration) => {
    return {type: 'LOAD_ADMINISTRATION_SUCCESS', administration};
};

export const loadAdministration = (guid) => {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return CalendarApi.loadAdministration(guid).then(administration => {
            dispatch(loadAdministrationSuccess(administration));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
};
