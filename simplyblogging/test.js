values=[];
function addRecord() {
    var inp = document.getElementById('inputtext');
    values.push(inp.value);
    inp.value = "";  
  }
  
  function displayRecord() {
    document.getElementById("values").innerHTML = values.join(", ");
  }