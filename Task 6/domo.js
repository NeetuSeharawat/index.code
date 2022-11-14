

var Items = document.querySelectorAll('.list-group-item');
Items[1].style.color="green";

var odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green";
}