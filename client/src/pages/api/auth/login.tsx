import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const API_URL = 'http://localhost:1337';

async function loginUser(email: string, password: string) {
  const response = await axios.get(`${API_URL}/users?email=${email}`);
  const user = response.data[0];

  if (!user) {
    throw new Error('User not found');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Incorrect password');
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error('JWT_SECRET is not set in the environment variables');
  }

  const token = jwt.sign({ id: user.id }, jwtSecret, {
    expiresIn: '1h',
  });

  return { token, user };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
}
