const url = "http://localhost:55555/api/users";
//created object
 let UserService = {}

UserService.list = () => {
    return $.getJSON(url);
};
//get by id method
UserService.get = (id) => {
    return $.getJSON(`${url}/${id}`);

};

UserService.insert = (user) => {
    return $.ajax ({
        method:"POST",
        url: url,
        data: JSON.stringify(user),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });

    
}
UserService.edit = (user) => {
    return $.ajax ({
        method:"PUT",
        url: `${url}/${user.id}`,
        data: JSON.stringify(user),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });

    
}
UserService.delete = (user) => {
    return $.ajax ({
        method:"Delete",
        url: `${url}/${user.id}`,
        data: JSON.stringify(user),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });

    
}



