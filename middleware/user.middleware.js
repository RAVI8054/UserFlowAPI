//middleware for Log method and URL request and response status
export const ReqDetails = (req, res, next) => {
  console.log("middleware 1 for request details=>method,ural or statuscode");

  // Log method and URL request
  console.log(`Request: ${req.method} ${req.originalUrl}`);

  // After the response is sent
  res.on("finish", () => {
    console.log(`Response status: ${res.statusCode}`);
  });
  // Continue to next middleware or route
  next();
};

// ===========================================
// Implement validation middleware to check for required fields in the POST and PUT
// routes.
// middlewares/validateUserFields.js
export const validateUserFields = (req, res, next) => {
  const { firstName, lastName, hobby } = req.body;
  console.log("middleware 2 is running for put and post validation");

  if (!firstName || !lastName || !hobby) {
    return res.status(400).json({
      middleware: 2,
      error: " All fields (firstName, lastName, hobby) are required.",
    });
  }
  // continue to the controller
  next();
};
