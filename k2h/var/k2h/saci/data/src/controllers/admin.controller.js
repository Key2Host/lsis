function adminDashboard(req, res) {
    res.json({ message: `Willkommen im Admin-Dashboard, ${req.user.username}!` });
  }
  
  module.exports = { adminDashboard };