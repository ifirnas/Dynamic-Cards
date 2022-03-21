import { axiosInstance } from '../../network/apis';
const handlerEnabled = false;

const apiCardListRequest = async () => {
  return await axiosInstance.get(`/cardDetails`, { handlerEnabled });
};

export default {
  apiCardListRequest
};