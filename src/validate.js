const isRequired = (input) =>
  input === '' ? 'This is a required field' : true;

module.exports = isRequired;
