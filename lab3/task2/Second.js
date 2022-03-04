let first = document.getElementsByClassName("first_div")[0]
let second = document.getElementsByClassName("second_div")[0];

let images = document.getElementsByTagName("img");
for (let index = 0; index < images.length; index++) {
    images[index].addEventListener("dragstart", (e)=>{
        children_number = second.childElementCount;
        e.dataTransfer.setData("image", e.target.outerHTML);
    })

    images[index].addEventListener("dragend", (e)=>{
        if(children_number < second.childElementCount){
            if(e.target.dataset.count > 1)
            {
                e.target.dataset.count --;
            }else{
            first.removeChild(e.target);
            }
            if(first.childElementCount == 0)
            {
                first.innerHTML = "Empty";
            }
        }});}



second.addEventListener("dragenter", smth);
second.addEventListener("dragover", smth);

second.addEventListener("drop", function(e){
    e.preventDefault();
    second.innerHTML +=  e.dataTransfer.getData("image");
});

function smth(e){
    e.preventDefault();
}


