var NUM_OF_CANDIDATES = 100;

function pickCandidate () {
	var candidates = (function () {
		var numbers = [];
		var candidates = [];
		var i;

		for (i = 0; i < NUM_OF_CANDIDATES; i++) {
			numbers.push(i);
		}

		for (i = 0; i < NUM_OF_CANDIDATES; i++) {
			var numIndex = Math.floor(numbers.length * Math.random());
			candidates.push({
				value: numbers.splice(numIndex, 1)[0]
			});
		}

		return candidates;
	})();

	var randomPick = candidates[0];

	var e = 0.368;
	var sampleCanditates = Math.floor(candidates.length * e);
	var bestSample = 0;
	var i, candidate;
	// Pick best sample
	for (i = 0; i < sampleCanditates; i++) {
		candidate = candidates.shift();
		
		if (candidate.value > bestSample) {
			bestSample = candidate.value;
		}
	}

	// Select best candidate
	var bestCandidate;
	for (i = 0; i < candidates.length; i++) {
		candidate = candidates[i];
		if (candidate.value > bestSample) {
			bestCandidate = candidate;
			break;
		}
	}

	if (!bestCandidate)
		bestCandidate = candidates.pop();

	return bestCandidate;
}

var result = {};
for (var i = 0; i < 100000; i++) {
	var candidate = pickCandidate();
	var value = candidate.value.toString();
	if (result[value] === undefined) {
		result[value] = 0;
	}

	result[value]++;
}

console.log(result);
// Print ..