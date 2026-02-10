import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');
  
  // Clear existing data
  await prisma.expense.deleteMany();
  await prisma.user.deleteMany();
  
  // Create a test user
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: hashedPassword,
      expenses: {
        create: [
          {
            amount: 29.99,
            category: 'Food',
            description: 'Lunch at restaurant',
          },
          {
            amount: 49.99,
            category: 'Shopping',
            description: 'New shirt',
          },
        ],
      },
    },
  });
  
  console.log(`Created user: ${user.email}`);
  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });