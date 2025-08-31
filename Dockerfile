# 1. Use official Node.js LTS image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies with Yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 4. Copy source and build
COPY . .
RUN yarn build

# 5. Use a smaller image for production
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Set Next.js port to 8085
ENV PORT=8085
ENV HOST=0.0.0.0

# Copy only needed files from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 8085

# Run Next.js in production
CMD ["yarn", "start", "-p", "8085"]