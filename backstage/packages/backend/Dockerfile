# Stage 1 - Create yarn install skeleton layer
FROM node:18-bookworm-slim AS packages

WORKDIR /app
COPY package.json yarn.lock ./

COPY packages packages

# Comment this out if you don't have any internal plugins
# COPY plugins plugins

RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -exec rm -rf {} \+

