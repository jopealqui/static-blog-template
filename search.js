//algorithm from https://www.w3schools.com/howto/howto_js_filter_lists.asp 

function search() {
  // Declare variables
  var input, filter, ul, div, a, i, txtValue;
  input = document.getElementById('busca');
  filter = input.value.toUpperCase();
  m = document.getElementById("m");
  div = m.getElementsByTagName('div');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < div.length; i++) {
    h = div[i].getElementsByTagName("h1")[0];
    txtValue = h.textContent || h.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}

