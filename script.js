const toggles=document.querySelectorAll(".toogle");
const good=document.getElementById("good");
const cheap=document.getElementById("cheap");
const fast=document.getElementById("fast");

const dotheTrick=(theClickedOne)=>{
    if(good.checked&&cheap.checked&&fast.checked){
        if(good===theClickedOne)fast.checked=false;
        if(cheap===theClickedOne)good.checked=false;
        if(fast===theClickedOne)cheap.checked=false;
    }
};

toggles.forEach((toggle)=>
    toggle.addEventListener("change",(e)=>dotheTrick(e.target))
);

