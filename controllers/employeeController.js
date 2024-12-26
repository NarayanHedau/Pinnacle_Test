const employeeServices = require("../services/employeeServices");

const getEmployees = async (req, res) => {
  try {
    const employees = await employeeServices.fetchEmployees();
    console.log("Fetched employees data:", employees);
    res.render("employees", { employees: employees.data });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send("Error fetching employee details.");
  }
};

module.exports = { getEmployees };
