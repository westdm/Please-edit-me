
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1DpRZ4IA6Xd_rd4sNnkpuTkp_-6KOEJJWS-VqZxw4oU0/edit?usp=sharing';
  console.log(publicSpreadsheetUrl);
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }
let body = document.querySelectorAll('body');
  function showInfo(data, tabletop) {
   data.forEach(function(data) {
    body.forEach(elem => {
         elem.innerHTML = data.body[i];
});
 });
  };

  window.addEventListener('DOMContentLoaded', init)














































