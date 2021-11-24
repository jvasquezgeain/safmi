var UPB_CrewMembers = []


function addRegister() {
    var validate_password = /^[A-Za-z0-9]{2,5}$/
    var validate_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    var switch_validate = true
    var name_register = document.getElementById('txtName').value
    var business = document.getElementById('txtBusiness').value
    var description = document.getElementById('txtDescription').value
    var name_user = document.getElementById('txtUserName').value

    var validate = validate_email.test(name_user)
    if (!validate) {
        alert('El valor ingresado no es un correo valido, por favor valide la informacón ingresada')
        console.log('patron de correo no valido')
        switch_validate = false
    }

    var password_user = document.getElementById('txtPassword').value
    var validate = validate_password.test(password_user)
    if (!validate) {
        alert('La contraseña ingresada no cumple con lo requerido')
        console.log('patron de contraseña no valido')
        switch_validate = false
    }

    if (switch_validate) {
        var Register = { "Name": name_register, "Business": business, "Description": description, "User": name_user, "Password": password_user }

        UPB_CrewMembers.push(Register)
        document.getElementById('txtName').value = ""
        document.getElementById('txtBusiness').value = ""
        document.getElementById('txtDescription').value = ""
        document.getElementById('txtUserName').value = ""
        document.getElementById('txtPassword').value = ""

        UPB_CrewMembers.forEach(function(x) {
            console.log(x)
            console.log(x.User)
        })
    }
}