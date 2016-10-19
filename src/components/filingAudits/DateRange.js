import React, {PropTypes} from 'react';
import DatePicker from 'material-ui/DatePicker';

const styles2 = {
    display: 'inline-block',
    marginLeft: '20px'
};

const text = {
    width: '130px'
}

class DateRange extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
            {this.props.label}
                <DatePicker
                    hintText="From"
                    onChange={this.props.onFromDateChanged}
                    defaultDate={this.props.defaultDate}
                    formatDate={this.props.dateFormat}
                    textFieldStyle={text}
                    style={styles2}/>
                <DatePicker
                    hintText="To"
                    onChange={this.props.onToDateChanged}
                    formatDate={this.props.dateFormat}
                    textFieldStyle={text}
                    style={{display: 'inline-block', marginLeft: '20px'}}/>
            </div>
        );
    }
}

DateRange.propTypes = {
    onFromDateChanged: PropTypes.func.isRequired,
    onToDateChanged: PropTypes.func.isRequired,
    dateFormat: PropTypes.func.isRequired
};

export default DateRange;
