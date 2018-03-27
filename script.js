function newItem(title, bought) {
    //add <li></li>
    var newLi = document.createElement("li");
    // put <input  type= "checkbox">inside li
    var newInput = document.createElement("input");
    newInput.setAttribute('type', 'checkbox');
    if(bought == true){
      newInput.setAttribute('checked',true)
    }
    newLi.append(newInput);
    var newId = title;
    newLi.append(newId);
    var ul = document.getElementById("ul");

    ul.appendChild(newLi);
    // var task = get the innnerHTML of class "main"
    // task.appendChild("newLi")

    // url (required), options (optional)

}
fetch('/list', {
        method: 'get'
    })
    .then(function (response) {
        response.json().then(function (list) {
            var leng = list.length;
            var lengs = response.body;
            for (var i = 0; i < leng; i++) {
                console.log("i th element", list[i])
                newItem(list[i].title, list[i].bought)
                console.log('these are the title',list[i].title)
            }
        })

    }).catch(function (err) {
        // Error :(
    });
//add the value in newId to the list

//create a event listener for a click
document.getElementById("button").addEventListener("click", function (evt) {
    console.log(evt)
    newItem(document.getElementById("main").value, false)
});
