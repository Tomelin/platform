# Stage 1 - Create yarn install skeleton layer
FROM node:18-bookworm-slim AS packages

# ARG LOCALPATH=''
WORKDIR /app
COPY package.json yarn.lock ./

COPY packages packages

# Comment this out if you don't have any internal plugins
# COPY plugins plugins

RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -exec rm -rf {} \+

# Stage 2 - Install dependencies and build packages
FROM node:18-bookworm-slim AS build

# Install isolate-vm dependencies, these are needed by the @backstage/plugin-scaffolder-backend.
# RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
#     --mount=type=cache,target=/var/lib/apt,sharing=locked \
RUN    apt-get update && \
    apt-get install -y --no-install-recommends python3 git g++ build-essential && \
    yarn config set python /usr/bin/python3

# Install sqlite3 dependencies. You can skip this if you don't use sqlite3 in the image,
# in which case you should also move better-sqlite3 to "devDependencies" in package.json.
# RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
#     --mount=type=cache,target=/var/lib/apt,sharing=locked \
RUN    apt-get update && \
    apt-get install -y --no-install-recommends libsqlite3-dev

USER node
WORKDIR /app

COPY --from=packages --chown=node:node /app .

# RUN --mount=type=cache,target=/home/node/.cache/yarn,sharing=locked,uid=1000,gid=1000 \
RUN    yarn install --frozen-lockfile --network-timeout 600000

COPY --chown=node:node . .

RUN yarn tsc
