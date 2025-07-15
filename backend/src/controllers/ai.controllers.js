import asyncHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";
import ai from "../services/ai.services.js";

const generateContent = asyncHandler(async (req, res) => {
  const { prompt } = req.body;
  const responseText = await ai.generateContent(prompt);

  console.log("Sending response:", responseText);

  res.status(200).json(new apiResponse(200, "Success", responseText));
});

export { generateContent };
