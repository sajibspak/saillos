#!/bin/bash
cd /home/ec2-user/saillos || exit
echo "🔁 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm install --omit=dev

echo "🏗️ Building production..."
npm run build

echo "🚀 Restarting PM2..."
pm2 restart saillos || pm2 start npm --name "saillos" -- run start

echo "✅ Deployment complete!"
