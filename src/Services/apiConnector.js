import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = async (method, url, {bodyData}, headers, paramas) => {
  return axiosInstance({
    method: `${method}`,
    url: "http://localhost:8000/api/users",
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: paramas ? paramas : null,
  });
};

// import axios from "axios";

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method: `${method}`,
//         url: "http://localhost:8000/api/users",
//         // url: `${url}`,
//         data: bodyData ? bodyData : null,
//         headers: headers ? headers : null,
//         params: params ? params : null,
//     });
// };
