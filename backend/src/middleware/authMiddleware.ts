import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Definindo um tipo personalizado para adicionar o usuário no objeto Request
export interface AuthRequest extends Request {
  user?: any;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtendo o token do header

  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return; // Certificando-se de que a execução para aqui
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    req.user = decoded; // Adicionando os dados do token decodificado ao objeto Request
    next(); // Chamando o próximo middleware
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
