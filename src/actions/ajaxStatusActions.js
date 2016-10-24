export const beginAjaxCall = (company) => {
    return {type: 'BEGIN_AJAX_CALL'};
}

export const ajaxCallError = (company) => {
    return {type: 'AJAX_CALL_ERROR'};
}
