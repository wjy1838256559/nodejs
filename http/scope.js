var globalVarible = 'This is global Varible';

function globalFunction(){
	var localVarible = 'This is local varible';

	console.log('Visit global/local varible');
	console.log(globalVarible);
	console.log(localVarible);

	globalVarible = 'This is changed varible';

	console.log(globalVarible);

	function localFunction(){
		var innerLocalVarible = 'This is inner local varible';

		console.log('Visit global/local/innerLocal varible');
		console.log(globalVarible);
		console.log(localVarible);
		console.log(innerLocalVarible);
	}
	localFunction();
}

globalFunction();