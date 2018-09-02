const success = () =>{
	console.log('Success');
};

const failure = () =>{
	console.log('Failed');
};

/*
	This function returns a new promise
	@author Ankur Srivastava
	@param String
*/
function createReport(reportName){
	return new Promise((success, failure) => {
		if(reportName === ''){
			success();
		} else {
			failure();
		}
	});
}

createReport('Employee Performance').then(success, failure);

