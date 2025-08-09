# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine
WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]