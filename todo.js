var items=['3 Litre Su İç','Ödevleri Yap','En Az 3 Saat Kodlama Yap','Yemek Yap','50 Sayfa Kitap Oku'];

var list=document.querySelector("#list");

items.forEach(function(item){
    
    createItem(item);

});

list.addEventListener('click',function(item){
    if(item.target.tagName='li'){
        item.target.classList.toggle('checked')
    }
})

function newElement(){
    var item=document.querySelector('#task').value;

    if(item==""){
        alert('Lütfen bir değer giriniz!');
        return;
    }
    
    createItem(item);
}
function createItem(item){
    var li=document.createElement('li');
    var t=document.createTextNode(item);
   
    li.appendChild(t);
    list.appendChild(li);


    var span=document.createElement('span');
    var text=document.createTextNode('\u00D7');
    span.classList='close';
    span.appendChild(text)
    li.appendChild(span)

    span.onclick=function(){
        var li=this.parentElement;
        li.style.display='none';
    }


}