import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export class DatePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: 'START_DATE'
        };
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="id"
                    endDate={this.state.endDate}
                    endDateId="id1"
                    onDatesChange={({ startDate, endDate }) =>
                        this.setState({
                            startDate,
                            endDate
                        })
                    }
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput =>
                        this.setState({ focusedInput })
                    }
                    style={{ width: '1rem', maxWidth: '1rem' }}
                    showDefaultInputIcon={false}
                />
            </div>
        );
    }
}

export default DatePicker;
