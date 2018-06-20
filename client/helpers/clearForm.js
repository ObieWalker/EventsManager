const clearForm = (fields) => {
  fields.forEach((field) => {
    document.getElementById(field).value = '';
  });
};

export default clearForm;
