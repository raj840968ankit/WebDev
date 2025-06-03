import { getUserByEmail, createUser, hashPassword, comparePassword, generateToken } from "../services/auth.services.js";
import { loginUserSchema, registerUserSchema } from "../validators/auth.validator.js";

export const getRegisterPage = (req, res) => {
    try {
        if(req.user) {
            return redirect('/');   //via JWT token
        }

        //?sending error is user exists while registering and stored via flash's error datatype
        return res.render("auth/register", {errors : req.flash('errors')})
    } catch (error) {
        console.error("Render error:", error);
        return res.status(500).send("Internal Server Error 2")
    }
}

export const getLoginPage = (req, res) => {
    if(req.user) {
        return redirect('/');   //via JWT token
    }

    //?sending error is user exists while logging and stored via flash's error datatype
    return res.render("auth/login", {errors : req.flash('errors')})
}

export const postLogin = async (req, res) => {
    if(req.user) {
        return redirect('/');   //via JWT token
    }
    // const {email, password} = req.body;

    //!using zod schema validation
    const {data, error} = loginUserSchema.safeParse(req.body)
    //console.log(data);
    if(error){
        const errors = error.errors[0].message;
        req.flash("errors", errors);
        return res.redirect('/auth/login')
    }
    const {email, password} = data;

    
    const user = await getUserByEmail(email);
    console.log("user exists : ",user);


    if(!user){
        //!using flash-connect to store in session using 'errors' datatype
        req.flash("errors", "Invalid Email or Password!!");
        return res.redirect('/auth/login')
    }

    //!comparing userExist.password(hashed One) with password
    const isValidPassword = await comparePassword(password, user.password)

    //if user exist then check for password
    // if(userExist.password !== hashedPassword){
    //     return res.redirect('/auth/login')
    // }

    
    if(!isValidPassword){
        req.flash("errors", "Invalid Email or Password!!");
        return res.redirect('/auth/login')
    }


    //! setting of cookies and path is "/" because session starts from out home page and every url starting from "/".... (complex)
    // res.setHeader('Set-Cookie', 'isLoggedIn=true; path=/;')
    //?go to getShortenerPage route to get cookie value

    //! setting of cookie via cookie parser(Recommended)
    // res.cookie("isLoggedIn", true)
    //?go to getShortenerPage route to get cookie value


    //!Creating a JWT token here
    const token = generateToken({
        id : user.id,
        name : user.name,
        email : user.email
    })
    //?After generating token we will send the cookie to client's browser with token value
    res.cookie('access-token', token);
    
    return res.redirect('/')
}

export const postRegister = async (req, res) => {
    // const {name, email, password} = req.body;

    //!using zod schema validation
    const {data, error} = registerUserSchema.safeParse(req.body)
    //console.log(data);
    if(error){
        const errors = error.errors[0].message;
        req.flash("errors", errors);
        return res.redirect('/auth/register')
    }
 
    const {name, email, password} = data

    const userExist = await getUserByEmail(email);
    //console.log("user exists : ",userExist);


    if(userExist){
        //!using flash-connect to store in session using 'errors' datatype
        req.flash("errors", "User already exists!");
        
        return res.redirect('/auth/register')
    }

    //!hashing of password first then add it to database
    const hashedPassword = await hashPassword(password)
    
    const [user] = await createUser({name, email, password : hashedPassword});
    console.log(user);

    return res.redirect('/auth/login')
}

export const getMe = (req, res) => {
    if(!req.user) {
        return res.send("Not logged in")
    }
    return res.send(`<h1>Hey - ${req.user.name} - ${req.user.email}</h1>`)
}

export const getLogoutUser = (req, res) => {
    res.clearCookie('access-token')
    return res.redirect('/auth/login')
}