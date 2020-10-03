//var alreadyActivated = JSON.parse(localStorage.getItem(listDiv));



var positionCounter = 1;

function newNameFunction()
{
  var listDiv = document.getElementById("NewListDiv" + positionCounter);
  listDiv.style.display = "block";
  var changeP = document.getElementById("Text" + positionCounter);
  changeP.innerHTML = newNameField.value;

  let saveslot = {
    name: newNameField.value,
    div: listDiv.style.display,
    p: positionCounter
  }
  let saveslot_crypt = JSON.stringify(saveslot);
  console.log(saveslot_crypt);
  localStorage.setItem("saving01", saveslot_crypt);

  let saveslot_decrypt = JSON.parse(localStorage.getItem("saving01"));
  console.log(saveslot_decrypt.name);


//hier muss etwas rein, dass die ID vom DIV tag speichert und speichert, ob es nun aktiv ist oder nicht
  //save(listDiv)


  positionCounter++;
}

function deleteObjectFunction(count)
{
  var newTag = document.getElementById("NewListDiv" + count);
  newTag.style.display = "none";
}

//Speichern der Checkboxen
/*$(function(){
    var test = localStorage.input === 'true'? true: false;
    $('input').prop('checked', test || false);
});
$('input').on('change', function() {
    localStorage.input = $(this).is(':checked');
    console.log($(this).is(':checked'));
});*/

//ich brauch noch eine Funktion, um das Speichern der Checkbox gesondert zu speichern


//Button zum zurücksetzen der gespeicherten Daten
