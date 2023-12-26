function getAllUsers(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'route not found',
  });
}
function getUser(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'route not found',
  });
}
function createUser(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'route not found',
  });
}
function updateUser(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'route not found',
  });
}
function deleteUser(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'route not found',
  });
}

module.exports = {
  deleteUser,
  updateUser,
  createUser,
  getAllUsers,
  getUser,
};
