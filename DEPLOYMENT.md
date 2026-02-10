# Deployment Checklist

## Pre-deployment
- [ ] Run `npm run build` to ensure no build errors
- [ ] Test all user flows locally
- [ ] Update environment variables for production
- [ ] Generate new NEXTAUTH_SECRET
- [ ] Backup database if needed

## Deployment Steps
1. Push code to repository
2. Set environment variables on hosting platform:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
3. Run database migrations: `npx prisma db push`
4. Generate Prisma client: `npx prisma generate`
5. Build the application: `npm run build`
6. Start the application: `npm run start`

## Post-deployment
- [ ] Verify home page loads
- [ ] Test user registration
- [ ] Test user login
- [ ] Test expense creation
- [ ] Test responsive design on mobile/tablet
- [ ] Monitor error logs