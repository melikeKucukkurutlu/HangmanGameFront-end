var alphabet= {'A': 18, 'B': 8, 'C': 12, 'D': 10, 'E': 20, 'F': 8, 'G': 9, 'H': 10, 'I': 16, 'J': 5};
function makeButton(){
	for(var l in alphabet)
	{
		var newButton=document.createElement('button');
		newButton.innerHTML=l + ': ' + alphabet[l] ;	
		document.getElementById('letter-container').appendChild(newButton);
	}
  document.getElementById('letter-container').addEventListener("click", event => {alert(event.target.textContent);});
  document.getElementById('card-container').addEventListener("click", event => {alert(event.target.textContent);});
}