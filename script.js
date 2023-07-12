//your code here
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let articles = ['A', 'AN', 'THE'];

bandNames.sort((a,b) => (strip(a) > strip(b) ? 1 : -1));

let ref = document.getElementsByTagName("ul")[0];
for(let i = 0; i < bandNames.length; i++){
	const li = document.createElement("li");
	li.innerText = bandNames[i];
	ref.append(li);
}


function strip(word){
	let wordArr = word.split(" ");
	let s = "";

	for(let i = 0; i < wordArr.length; i++){
		if(articles.indexOf(wordArr[i].toUpperCase()) == -1){
			s += wordArr[i];
		}
	}
}



