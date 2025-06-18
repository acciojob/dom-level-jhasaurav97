//your JS code here. If required.
const list = document.getElementById("level");
const allList = list.parentElement.children;
let index;
for(let i = 0; i < allList.length; i++){
	if(allList[i] === list){
		index = i;
		break;
	}
}
alert(`The level of the element is: ${index}`)