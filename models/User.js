const users = {
    id: {type: String, requires:true},
    fullName: {type: String, requires:true},
    email: {type: String, requires:true},
    phone: {type: String, requires:true},
    password: {type: String, requires:true}
}

module.exports = users