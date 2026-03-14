# ---- build stage ----
FROM oven/bun:1 AS builder

WORKDIR /app

COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

# ---- runtime stage ----
FROM oven/bun:1

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 1413

CMD ["bun", "run", "start", "--", "-p", "1413"]

