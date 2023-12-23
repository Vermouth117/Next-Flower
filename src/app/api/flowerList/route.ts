import { NextRequest, NextResponse } from "next/server";

const knex = require("../../../db/knex");

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const flowerList = await knex.select("*").from("flower_info");

    return NextResponse.json(
      { message: "Success", flowerList },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
  }
};
