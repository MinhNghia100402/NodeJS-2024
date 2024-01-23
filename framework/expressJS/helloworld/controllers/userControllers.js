




  
const fc1 = (req, res) => {
    res.json({ message: 'function1 ' });
};
const fc2 = (req, res) => {
    res.json({ message: 'function2 ' });
};

  module.exports = {
    fc1,
    fc2,
  };