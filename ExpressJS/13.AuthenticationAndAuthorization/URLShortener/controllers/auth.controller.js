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
    //! use of cookies and path is "/" because session starts from out home page and every url starting from "/"
    res.setHeader('Set-Cookie', 'isLoggedIn=true; path=/;')
    //?go to getShortenerPage route to check cookie value

    res.redirect('/')
}

export const postRegister = (req, res) => {
    res.redirect('/auth/login')
}