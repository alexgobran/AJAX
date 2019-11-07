$().ready( () => {
    $("#btnGet").click( () => {
        let id = $("#xid").val();
            get(id);
    });
    

    $("#deleteUser").click( () => {
        let user = {
            id:$("#pid").val(), 
            username : $("#pusername").val(),
            password : $("#ppassword").val(),
            firstname : $("#pfirstname").val(),
            lastname : $("#plastname").val(),
            phone : $("#pphone").val(),
            email : $("#pemail").val(),
            isReviewer : $("#pisReviewer").prop("checked"),
            isAdmin : $("#pisAdmin").prop("checked"),
            active : $("#pactive").prop("checked")

            
        }
        console.log("User:", user)
        UserService.delete(user)
            .done((res) => {
                console.log("Insert rc:", res)
            });
    });

});
const get = (id) => {
    UserService.get(id)
        .done ( (user) =>{

            $("#pid").val(user.id),
             $("#pusername").val(user.username),
             $("#ppassword").val(user.password),
             $("#pfirstname").val(user.firstname),
             $("#plastname").val(user.lastname),
             $("#pphone").val(user.phone),
             $("#pemail").val(user.email),
             $("#pisReviewer").prop("checked",user.isReviewer),
             $("#pisAdmin").prop("checked",user.isAdmin),
             $("#pactive").prop("checked",user.active)
        })


}