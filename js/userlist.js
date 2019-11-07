


function refresh(users) {
    var tbodyCtrl = document.getElementById("tbody");
    //  will make tbody tag empty
    tbodyCtrl.innerHTML = "";
    for (var user of users) {
        // if (!user.isAdmin) {
        //     continue;
        // }
        var tr = "<tr>";
        tr += `<td>${user.id}</td>`
        tr += `<td>${user.username}</td>`
        // tr += `<td>${user.password}</td>`
        tr += `<td>${user.firstname}</td>`
        tr += `<td>${user.lastname}</td>`
        tr += `<td>${user.isReviewer ? "Yes" : "No"}</td>`
        tr += `<td>${user.isAdmin ? "Yes" : "No"}</td>`
        tr += "</tr>";

        tbodyCtrl.innerHTML += tr;
    }


   
}




    const getUsers = () =>{
        //let jqXHR = UserService.List()
        //jqXHR.done((res) = >refresh(res))
let jqXHR = UserService.list()
jqXHR.done((res) => refresh(res) );
}