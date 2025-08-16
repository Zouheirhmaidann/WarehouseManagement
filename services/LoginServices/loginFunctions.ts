import AxiosInstance from "@/helpers/axiosInstance";
// Function to login the user
export const loginUser = async (username: string, password: string) => {
  try {
    // Call the api
    const { data: response } = await AxiosInstance.post("loginUser", {
      username,
      password,
    });
    // if there is no response, throw an error
    if (!response) throw Error;
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};
