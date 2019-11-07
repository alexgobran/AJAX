$().ready (() => {
let urlParms = Utilities.parseUrlParameters(document.URL);
$(".heading").css("fontWeight","bold");
getUser(urlParms.id);
    // $("button").click(() => { 
    //     getUser();
    // });
});


const refresh = (user) => {
    // console.log("hello");
    $("#pid").text(user.id);
    $("#pusername").text(user.username);
    $("#pname").text(user.firstname +" " + user.lastname);
    $("#pisreviewer").text(user.isReviewer);
    $("#pisadmin").text(user.isAdmin);
};
const getUser = (user) => {
    let id = $("#xid").val();//get the id to display
    UserService.get(id)
    .done((res) => {
        console.log ("user:", res)
        refresh(res) 
    });
};