const logoutController = {};

logoutController.logout = (req, res) => {
    //limpiar la cookie que tiene la info de quien inició sesión
    res.clearCookie("authCookie");
    return res.status(200).json({ message: "Sesión cerrada" });
}

export default logoutController;