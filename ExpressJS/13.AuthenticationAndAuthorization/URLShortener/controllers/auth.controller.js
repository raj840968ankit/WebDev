import { getUserByEmail, createUser, hashPassword, comparePassword } from "../services/auth.services.js";

export const getRegisterPage = (req, res) => {
    try {
        return res.render("auth/register")
    } catch (error) {
        console.error("Render error:", error);
        return res.status(500).send("Internal Server Error 2")
    }
}

export const getLoginPage = (req, res) => {
    return res.render("auth/login")
}

export const postLogin = async (req, res) => {
    const {email, password} = req.body;

    const userExist = await getUserByEmail(email);
    //console.log("user exists : ",userExist);


    if(!userExist){
        return res.redirect('/auth/login')
    }

    //!comparing userExist.password(hashed One) with password
    const isValidPassword = await comparePassword(password, userExist.password)

    //if user exist then check for password
    // if(userExist.password !== hashedPassword){
    //     return res.redirect('/auth/login')
    // }

    if(!isValidPassword){
        return res.redirect('/auth/login')
    }


    //! setting of cookies and path is "/" because session starts from out home page and every url starting from "/".... (complex)
    // res.setHeader('Set-Cookie', 'isLoggedIn=true; path=/;')
    //?go to getShortenerPage route to get cookie value

    //! setting of cookie via cookie parser
    res.cookie("isLoggedIn", true)
    //?go to getShortenerPage route to get cookie value
    
    res.redirect('/')
}

export const postRegister = async (req, res) => {
    const {name, email, password} = req.body;

    const userExist = await getUserByEmail(email);
    //console.log("user exists : ",userExist);


    if(userExist){
        return res.redirect('/auth/register')
    }

    //!hashing of password first then add it to database
    const hashedPassword = await hashPassword(password)
    
    const [user] = await createUser({name, email, password : hashedPassword});
    console.log(user);

    return res.redirect('/auth/login')
}