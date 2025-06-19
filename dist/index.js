/** @license Apache-2.0 */

'use strict';

/**
* Serialize a one-sample Z-test results object as a JSON object.
*
* @module @stdlib/stats-base-ztest-one-sample-results-to-json
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var res2json = require( '@stdlib/stats-base-ztest-one-sample-results-to-json' );
*
* var results = {
*     'rejected': false,
*     'alpha': 0.05,
*     'pValue': 0.3364,
*     'statistic': 11.7586,
*     'nullValue': 0.0,
*     'sd': 0.4563,
*     'ci': new Float64Array( [ 9.9983, 11.4123 ] ),
*     'alternative': 'two-sided',
*     'method': 'One-sample Z-test'
* };
*
* var obj = res2json( results );
* // returns {...}
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
