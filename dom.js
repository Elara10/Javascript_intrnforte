//Grabbing html elements
let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el")
//variables
let count=0;

//dom manipulation

function increment()
{
  count=count+1;
  countEl.innerHTML=count;
}
function decrement()
{
  count=count-1;
  countEl.innerHTML=count;
}

function save()
{
  let countStr=count + "-"
  saveEl.textContent += countStr

  count=0
  countEl.innerText=count;
}
function reset()
{
  saveEl.innerText="Previous value:";
  count=0;
  countEl.innerText=count;
}