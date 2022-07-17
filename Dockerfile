FROM node:lts-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --virtual \
    build-essential \
    libc6-compat \
    python3 \
    py3-pip \
    make \
    g++
WORKDIR /app
COPY . .
RUN npm ci
ENV NEXT_TELEMETRY_DISABLED 1
RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm run build
RUN mkdir -p /app/.next/cache/images

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner
RUN apk add --virtual \
    build-essential \
    libc6-compat \
    python3 \
    py3-pip \
    make \
    g++
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --chown=nextjs:nodejs --from=builder /app/ ./
USER nextjs
ENV PORT 3000
CMD ["npm", "run","start"]