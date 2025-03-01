function adminDashboard(req, res) {
    res.json({ message: `Willkommen im Admin-Dashboard, ${req.user.customerID}!` });
  }
  
  module.exports = { adminDashboard };