import { NextResponse, NextRequest } from "next/server";

import { connectTODB } from "../../(database)/conn";

import Questions from "../../(models)/Questions";
export async function GET(request) {
  try {
    await connectTODB();
    const questions = await Questions.find();
    return NextResponse.json(questions);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
