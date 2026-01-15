import API from "./authApi"; // تمہارا axios instance

export const fetchPublishedManuscripts = async () => {
  const response = await API.get("/published-manuscripts");
  return response.data;
};
