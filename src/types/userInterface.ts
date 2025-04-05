export interface registerUser {
    fullname : string,
    email : string, 
    password : string
}

export interface loginUser {
    email : string, 
    password : string
}

export interface passwordUser {
    oldpassword : string,
    newpassword : string
}