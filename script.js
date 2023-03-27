var makeApiCallBtnElement = document.querySelector("#makeApiCallBtn");

function makeApiCallFunction(requestMethod, url, inputData, headers){
    // var response = {};
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == XMLHttpRequest.DONE) {
    //         response = xhr.responseText;
    //         return response;
    //     }
    // };
    // xhr.open(requestMethod, url, true);
    // xhr.setRequestHeader("Content-Type", headers["content-type"]);
    // xhr.setRequestHeader("Authorization", headers["authorization"]);
    // xhr.send(JSON.stringify(inputData));
    // WARNING: For POST requests, body is set to null by browsers.
    // WARNING: For POST requests, body is set to null by browsers.
    var data = JSON.stringify({
        "equipmentTypeId": "V",
        "origin": {
            "cityName": "Chicago",
            "stateCode": "IL",
            "countryCode": "USA",
            "postalCode": "60647"
        },
        "destination": {
            "cityName": "Madison",
            "stateCode": "WI",
            "countryCode": "USA",
            "postalCode": "53703"
        },
        "pickUpDateUTC": "2023-01-31",
        "minTemperature": "null",
        "maxTemperature": "null",
        "weight": "100",
        "commodity": "Sample Commodity",
        "equipmentLength": "53",
        "isHazmat": "false",
        "isDropTrailer": "false",
        "customerShipmentID": "CUST1234"
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://hyper.1avrl.com/api_call_samples/json/prosponsive/westrock");
    xhr.setRequestHeader("Authorization", "Bearer 6drsBDoE*ngThJUk-MfAbN7cE44G7zQZf");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}
function showDataInTextAreaFields(respData) {
    var outputArea = document.querySelector('#outputArea');
    var formattedData = JSON.stringify(respData, null, 4);
    outputArea.value = formattedData;
}
makeApiCallBtn.addEventListener("click", function () {
    console.log("here I am");
    var requestMethod = document.querySelector("#requestMethods").value;
    var url = document.querySelector("#requestURL").value;
    var headers = JSON.parse(document.querySelector("#headers").textContent);
    var inputJson = {
        "equipmentTypeId": document.querySelector("#equipmentTypeId").value,
        "origin": {
            "cityName": document.querySelector("#originCityName").value,
            "stateCode": document.querySelector("#originStateCode").value,
            "countryCode": document.querySelector("#originCountryCode").value,
            "postalCode": document.querySelector("#originPostalCode").value,
        },
        "destination": {
            "cityName": document.querySelector("#destinationCityName").value,
            "stateCode": document.querySelector("#destinationStateCode").value,
            "countryCode": document.querySelector("#destinationCountryCode").value,
            "postalCode": document.querySelector("#destinationPostalCode").value,
        },
        "pickUpDateUTC": document.querySelector("#pickUpDateUTC").value,
        "minTemperature": document.querySelector("#minTemperature").value,
        "maxTemperature": document.querySelector("#maxTemperature").value,
        "weight": document.querySelector("#weight").value,
        "commodity": document.querySelector("#commodity").value,
        "equipmentLength": document.querySelector("#equipmentLength").value,
        "isHazmat": document.querySelector("#isHazmat").value,
        "isDropTrailer": document.querySelector("#isDropTrailer").value,
        "customerShipmentID": document.querySelector("#customerShipmentID").value
    };
    console.log(inputJson);
    var resp = makeApiCallFunction(requestMethod, url, inputJson, headers);
    resp = {
        "equipmentTypeId": 0,
        "pickUpDateUTC": "2023-03-31T22:25:12.6383296Z",
        "validUntilUtc": "2023-04-21T22:25:12.6383296Z",
        "totalRate": 12000000,
        "rateLineItems": [
            {
                "rateCode": "FR",
                "description": "Flat Rate",
                "unitRate": 11000000,
                "units": 1.0,
                "totalRate": 11000000,
                "currency": "USD"
            },
            {
                "rateCode": "405",
                "description": "Fuel Surcharge",
                "unitRate": 10,
                "units": 100000,
                "totalRate": 1000000,
                "currency": "USD"
            }
        ]
    };
    if (resp) {
        showDataInTextAreaFields(resp);
    }
    console.log(resp);
});