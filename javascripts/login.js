var Superadmin = [{ "Login": "Sadmin", "Password": "Tripulantes2021" }]

function validate_user() {

    var switch_control = false
    var name_user = document.getElementById('txtUserName').value
    console.log(name_user)
    var password_user = document.getElementById('txtPassword').value

    Superadmin.forEach(function(x) {
        if (x.Login == name_user && x.Password == password_user) {
            location.href = 'home.html'
            switch_control = true
        }

    })

    if (switch_control == false) {
        alert("El usuario no existe/ Credenciales usuario y/o Password incorrectos  ")
    }

}