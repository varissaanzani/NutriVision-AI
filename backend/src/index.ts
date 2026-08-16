import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 1. Get All Menus
app.get('/api/menus', async (req: Request, res: Response) => {
  try {
    const menus = await prisma.menu.findMany();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menus' });
  }
});

// 2. Create Menu
app.post('/api/menus', async (req: Request, res: Response) => {
  try {
    const { name, description, calories, protein, carbs, imageUrl } = req.body;
    const menu = await prisma.menu.create({
      data: { name, description, calories, protein, carbs, imageUrl },
    });
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create menu' });
  }
});

// 3. Get Distributions
app.get('/api/distributions', async (req: Request, res: Response) => {
  try {
    const distributions = await prisma.distribution.findMany({
      include: {
        sppg: true,
        school: true,
        menu: true,
        foodWasteLog: true,
      },
    });
    res.json(distributions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch distributions' });
  }
});

// 4. Update Distribution Status (e.g. from DIKIRIM to DITERIMA)
app.patch('/api/distributions/:id/status', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // should be one of the enums
    
    const distribution = await prisma.distribution.update({
      where: { id },
      data: { status },
    });
    res.json(distribution);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update status' });
  }
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'NutriVision Backend API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
