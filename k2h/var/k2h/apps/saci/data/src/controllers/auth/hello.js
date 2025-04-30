module.exports = {
    hello(req, res) {
        res.json({
            success: true,
            user: {
                fullname: req.user.firstname + " " + req.user.lastname,
                firstname: req.user.firstname,
                lastname: req.user.lastname,
                customerID: req.user.customerID
            }
        });
    }
};