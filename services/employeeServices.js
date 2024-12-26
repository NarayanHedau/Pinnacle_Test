const axios = require("axios");

const fetchEmployees = async () => {
  try {
    const response = await axios.post(
      "https://demo.pinnacle.in/v1/wamessage/employeeList",
      {},
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log(">>>>>>", response.data)
    return response.data;
  } catch (error) {
    console.error("Error in fetching employee data:", error);
    throw error;
  }
};

module.exports = { fetchEmployees };
