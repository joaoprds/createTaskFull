import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRoutes from '../src/routes/taskRoutes';
import { errorHandler } from '../src/middleware/errorHandler';
import dotenv from 'dotenv';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('DB Connection Error:', err));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'API for managing tasks',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Login Endpoint
app.post("/login", async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  // Replace this with real user authentication logic
  const user = { username: "admin", password: "admin123" };

  try {
    if (username === user.username && password === user.password) {
      const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET || "default_secret", {
        expiresIn: "1h",
      });
      res.json({ token }); // Use `res` para enviar a resposta
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred during login" });
  }
});

app.use('/api/tasks', taskRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
