'use strict';


function getFoodInfo() {
  $('.js-form').on('submit', function (event) {
    const input = $("#foodSearchInput").val();
    console.log("input: "+input);
    event.preventDefault();

    const apiKey = 'RwF2lQB673HZPRaw9tmfa7arFAiPTb8e3Q1FSMh5';
    const url = `https://api.nal.usda.gov/ndb/search/?format=json&q=${input}&sort=n&max=25&offset=0&api_key=${apiKey} `;
    const urlOther = `http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${apiKey}&nutrients=205&nutrients=204&nutrients=208&nutrients=269`;

    console.log(url);

    $('#myTable').DataTable();
    
    fetch(url)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
  })
}

function displayResults(test) {
  console.log(test);
  const dataInfo = test.list.item.map(item => {
    return Object.values(item);
  })

  table.clear();
  table.rows.add(dataInfo);
  table.draw();
}

let table = null;

  // Now just display the array in that JSON object using DataTable's api

$(document).ready(function () {
  table = $('#myTable').DataTable({
    data : null,
    columnDefs: [
      {
          targets:2,
          render: function ( data, type, row, meta ) {
              if(type === 'display'){
                  data = '<a href="basic.php?game=' + encodeURIComponent(data) + '">' + data + '</a>';
              }

              return data;
          }
      }
  ],

    colums : [
      { title: "offset"},
      { title: "group"},
      { title: "name"},
      // { title: "ndbno" },
      // { title: "ds"},
      { title: "manu" }
    ]
  })
  getFoodInfo();
});

// function getNutrientInfo() {
  
// }
