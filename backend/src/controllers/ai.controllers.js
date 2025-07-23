import asyncHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
import ai from "../services/ai.services.js";

const getReview = asyncHandler(async (req, res) => {
  const { code } = req.body;

  if (!code) throw new ApiError(400, "Code is required.");

  const responseText = await ai.generateContent(code);

  console.log("Sending response:", responseText);

  res.status(200).json(new apiResponse(200, "Success", responseText));
});

export { getReview };
