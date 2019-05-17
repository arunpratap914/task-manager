const calculateTip = (total, tipPercent) => {
  const tip = total * tipPercent + 1;
  return total + tip;
};

module.exports = { calculateTip };
