import { Request, Response } from 'express';

export const uploadPDF = (req: Request, res: Response) => {
  if (!req.file) return res.status(400).send('No file uploaded');
  res.status(200).send({ filename: req.file.filename });
};
