
document.addEventListener("DOMContentLoaded", function(){
    const button=document.getElementById("button");
    button.style.backgroundColor="light blue";
    button.style.color="blue";
    
    button.addEventListener("click", function(){
    console.log("Button clicked");
});
  });

  document.addEventListener("dblclick", function(){
    console.log("Double Click");
});

document.addEventListener("click", function(){
    console.log("click");
});


function change(){
    const picker=document.getElementById(`colorPicker`);
    document.body.style.backgroundColor=picker.value;
};
