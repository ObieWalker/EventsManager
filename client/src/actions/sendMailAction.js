import axios from 'axios';
import toastr from 'toastr';

const sendMail = (emailData) => {
  axios({
    method: 'POST',
    url: '/api/v1/admin/contact/',
    data: emailData
  })
    .then((response) => {
      toastr.success(response.data.message);
    })
    .catch((error) => {
      toastr.success(error.response.data.message);
    });
};

export default sendMail;
