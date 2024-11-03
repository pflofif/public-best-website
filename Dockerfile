# Stage 1: Build the application
# Use an official Node.js image as the base for the build stage
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Set environment variables if needed (e.g., NEXT_PUBLIC_API_URL)
# ENV NEXT_PUBLIC_API_URL="https://api.example.com"

# Build the Next.js application
RUN npm run build

# Stage 2: Run the application
# Use a smaller Node.js image for the runtime stage
FROM node:18-alpine AS runtime

# Set environment variable to use production optimizations
ENV NODE_ENV=production
ENV HOST=0.0.0.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for production dependencies
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --production

# Copy the Next.js build output and necessary files
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./next.config.js

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
# Replace the CMD line with the following
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]
