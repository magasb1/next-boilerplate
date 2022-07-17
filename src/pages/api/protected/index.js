import { getSession } from "next-auth/react";

export default async (req, res) => {
  if (req.method === "GET") {
    const session = await getSession({ req });
    if (!session) {
      res.status(401).json({ error: "unauthenticated user" });
    } else {
      res.status(200).json({ message: "success", session });
    }
  }
  
  res.end();
};
