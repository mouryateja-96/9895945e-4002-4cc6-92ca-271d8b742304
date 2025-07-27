# Base image with Node.js v18.19.0
FROM node:18.19.0

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code and data
COPY . .

# Build the TypeScript code (optional if using ts-node)
# RUN npm run build

# Expose port
EXPOSE 3000

# Run the development server using ts-node
CMD ["npx", "ts-node", "src/server.ts"]
