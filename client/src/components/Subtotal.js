import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from "react-currency-format";

import "../App.css";

const Subtotal = props => {
  return (
	<div className="subtotal">
	  <CurrencyFormat 
	    renderText={() => (
	      <>
            <p>
              Subtotal (3 items): <strong>59.97</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
	    )}
	    decimalScale={2}
        value={59.97} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
	  />	

	  <button>Proceed to Checkout</button>
	</div>
  );
}

Subtotal.propTypes = {

}

export default Subtotal;