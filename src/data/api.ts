import axiosInstance from "./axiosInstance";

const ApiService = {
  Events: {
    getEvents() {
      return axiosInstance.get(`/events`);
    },
    getEventsBetweenDates(start_date,end_date){
      return axiosInstance.get(`/events/${start_date}/${end_date}`);
    }
  },
  
};
export { ApiService };