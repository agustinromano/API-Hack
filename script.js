'use strict';


function getFoodInfo() {
  $('.js-form').on('submit', function (event) {
    const input = $("#foodSearchInput").val();
    console.log("input: "+input);
    event.preventDefault();

    const apiKey = 'RwF2lQB673HZPRaw9tmfa7arFAiPTb8e3Q1FSMh5';
    const url = `https://api.nal.usda.gov/ndb/search/?format=json&q=${input}&sort=n&max=25&offset=0&api_key=${apiKey} `;

    console.log(url);

    $('#myTable').DataTable();
    
    fetch(url)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
  })
}

function displayResults(test) {
  console.log(test);

  // Now just display the array in that JSON object using DataTable's api

  $('#myTable').DataTable( {
        data: test.list.item,
        columns: [
            { name: "Name" },
            { name: "Position" },
            { name: "Office" },
            { name: "Extn." },
            { name: "Start date" },
            { name: "Salary" }
        ]
    } );
}

$(document).ready(function () {
  getFoodInfo();
});


