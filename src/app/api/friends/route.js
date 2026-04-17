import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const { friends } = JSON.parse(fileContent);

  return Response.json({ friends });
}
