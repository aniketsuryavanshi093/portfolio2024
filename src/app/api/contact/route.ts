import { NextResponse } from "next/server";
import axios from "axios";

// Initialize the Google Sheets AP

export async function POST(request: Request) {
  try {
    // Extract the form data from the request body
    const json = await request?.json();
    console.log(json);
    const res = await fetch(
      "https://sheet.best/api/sheets/a394b2d4-ec4f-499c-89ad-0836970b053f",
      {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let json_response = {
      status: "success",
      data: {
        message: "success",
        res,
      },
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    let error_response = {
      status: "error",
      message: error.message || "An error occurred",
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
