import { config } from "dotenv";

config();

if (!process.env.PORT) {
  console.error("==> No PORT provided. Specify PORT in .env file to continue");
  process.exit(1);
}

if (!process.env.MONGODB_URI) {
  console.error(
    "==> No MONGODB URI provided. Specify a valid URI in .env file to continue"
  );
  process.exit(1);
}

export const { MONGODB_URI, PORT } = process.env;
