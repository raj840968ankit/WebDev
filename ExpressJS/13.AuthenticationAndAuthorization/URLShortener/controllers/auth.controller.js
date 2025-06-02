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

export const postLogin = (req, res) => {
    //! setting of cookies and path is "/" because session starts from out home page and every url starting from "/".... (complex)
    // res.setHeader('Set-Cookie', 'isLoggedIn=true; path=/;')
    //?go to getShortenerPage route to get cookie value

    //! setting of cookie via cookie parser
    res.cookie("isLoggedIn", true)
    //?go to getShortenerPage route to get cookie value
    
    res.redirect('/')
}

export const postRegister = (req, res) => {
    res.redirect('/auth/login')
}