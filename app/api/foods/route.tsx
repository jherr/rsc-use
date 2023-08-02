import { NextResponse } from "next/server";

const FOODS = ["Pizza", "Burger", "Sandwich", "Pasta"];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(FOODS);
}
