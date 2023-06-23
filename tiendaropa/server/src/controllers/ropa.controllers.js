import { pool } from "../db.js";

export const Ropas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM shoping",
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "ropa no encontrada" });
    } else {
      res.json(result);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};