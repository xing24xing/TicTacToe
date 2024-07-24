let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector('#new-btn');
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector('#msg');

let turnO = true;
const winpatterns = [
	[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) =>{
	box.addEventListener("click",() =>{
		// console.log("box was clicked")
		if(turnO)
		{
          box.innerText="O";
          turnO = false;
		}
		else
		{
			box.innerText="X";
			turnO = true;
		}
      box.disabled = true;
      checkwinner();
	})
});
const disabledbtn = () =>{
	for(let box of boxes)
	{
		box.disabled = true;

	}
}
const enabledbtn = () =>{
	for(let box of boxes)
	{
		box.disabled = false;
		box.innerText = "";
	}
}
const showwinner = (winner) =>{
msg.innerHTML = `Congratulation, Winner is ${winner}`;
disabledbtn();
msgcont.classList.remove("hide");
}
const checkwinner = () =>{

	for(pattern of winpatterns)
	{
		// console.log(pattern[0],pattern[1],pattern[2]);
		let posival1 = boxes[pattern[0]].innerText;
		let posival2 = boxes[pattern[1]].innerText;
		let posival3 = boxes[pattern[2]].innerText;
		if(posival1 != "" && posival2 !="" && posival3 != "")
		{
			if(posival1 == posival2 && posival2 == posival3)
			{
				
				showwinner(posival1);
			}
		}
	}
}

const resetgame =() =>{
	turnO = true;
	enabledbtn();
	msgcont.classList.add("hide");
}
newgamebtn.addEventListener("click",resetgame);
btn.addEventListener("click",resetgame);