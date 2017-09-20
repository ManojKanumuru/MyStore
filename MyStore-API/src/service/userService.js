'use strict';

import q from 'q';

import _ from 'underscore';

function processResults(response){
	let deferred = q.defer();
	let finalResult = _.pluck(response,'_id');
	deferred.resolve(response);
	return deferred.promise;
}

module.exports = {
	processResults
}