var user
var token = localStorage.getItem('token')
function getDescription() {
    var description = document.getElementById('description').value

    post={
        description
    }
    $.ajax({
        type: 'POST',
        data: JSON.stringify(post),
        contentType: 'application/json',
        headers: {
            'Authorization': token
        },
        url: '/posts'
    })

    location.href = '/home'
}

function userLogout() {
    var token = localStorage.getItem('token');
        $.ajax({
        type: 'POST',
        contentType: 'application/json',
        headers: {
            'Authorization': token
        },
        url: '/users/logout'
    })

    location.href = '/login'
}