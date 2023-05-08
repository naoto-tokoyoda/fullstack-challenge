import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import bcrypt from 'bcrypt';

const API_URL = 'http://localhost:1337';

async function createUser(username: string, email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const response = await axios.post(`${API_URL}/users`, {
    username,
    email,
    password: hashedPassword,
  });

  return response.data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, email, password } = req.body;

  try {
    const user = await createUser(username, email, password);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
        res.status(400).json({ message: error.message });
    } else {
    res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
}
