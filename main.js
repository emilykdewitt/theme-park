//XHR stands for XML HTTP Request

// printToDom = () => {
//     selectedDiv = document.getElementById('')
// };

let rides = [];

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
};

function executeThisCodeAfterFileLoads(){ //DON'T USE A FAT ARROW!
    const data = JSON.parse(this.responseText);
    rides = data.rides;
    domStringBuilder(data.rides);
};

function executeThisCodeIfXHRFails(){
    console.error('oh shit');
};

const getRidesData = () => {
    const myRequest = new XMLHttpRequest(); //makes a copy of the XHLHttpRequest in order to interact with server. You can retrieve data from a URL without having to do a full page refresh.
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './DB/rides.json');
    myRequest.send();
    console.log(myRequest);
};

const init = () => {
    getRidesData();
};

init();