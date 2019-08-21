import React from 'react';
import './CityInput.css';

export default class CityInput extends React.Component {
    state = {
        // only for styling purposes
        isCitySet: false
    }

    render(props) {
        const onKlickHandler = (e) => {
            const eventKey = e.which ? e.which : e.keyCode;

            // check if input contains only letters after Enter was pressed
            if (eventKey === 13) {
                if (/^[a-zA-Z]+$/.test(e.target.value)) {
                    this.props.setCity(e);
                    this.setState({ isCitySet: true })
                    e.target.value = '';
                    e.target.placeholder = 'Enter a City...';
                }
                else {
                    e.target.value = '';
                    e.target.placeholder = 'Please enter a valid city name...';
                }        
            }
        }

        return(
            <input className='city-input'
            style={{ top: this.state.isCitySet ? '-400px' : '78px' }}
            type='text' 
            placeholder='Enter a City...' 
            onKeyPress={onKlickHandler}/>
        );
    }
}