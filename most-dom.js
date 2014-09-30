/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var most = require('most');

function signalFromInputValue(event, node) {
	return most.fromEvent(event, node).map(eventToValue).startWith(node.value);
}

function eventToValue(e) {
	return e.target.value;
}
