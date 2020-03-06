$(document).ready(function() {
	$("form#formOne").submit(function(event) {
		event.preventDefault();
		var userSentence = $("input#userSentence").val();
		console.log(userSentence);

		var sentenceArray = userSentence.toLowerCase().split("");
		console.log(sentenceArray);

		function specOne(array) {
			if (["a", "i", "u", "e", "o"].includes(array[0])) {
				return array.concat("way").join("");
			}
		};
		function specTwo(array) {
			var holderArray = [];
			for (i=0; i <= array.length-1; i++) {
				if (!["a", "i", "u", "e", "o"].includes(array[i])) {
					holderArray.push(array[i]);
				} else {
					break;
				}
			}
			return array.slice(holderArray.length, array.length-1).concat(holderArray.join("") + "ay").join("");
		};
		function specsThreeAndFour(array) {
			if ((["q"].includes(array[0])) && (["u"].includes(array[1]))) {
				return array.concat(array[0] + array[1] + "ay").join("");
			}
		};
		
		
		$("#output").text(specOne(sentenceArray));
		$("#output").text(specTwo(sentenceArray));
		$("#output").text(specsThreeAndFour(sentenceArray));

	})
});