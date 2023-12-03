import { apiConnector } from "../apiConnector";
import { baseURL } from "../apis";

export async function getAllUsers(page=1) {
  try {

    const response = await apiConnector("GET", baseURL, { page }, null, {
      page
    });
    
    return response;
  } catch (error) {
    console.log("get all users Error", error);
  }
}
