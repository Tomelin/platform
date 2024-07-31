#!/bin/bash

docker run -dti --name back -p3000:3000 -p7007:7007 -v /Users/rafaeltomelin/devops/backstage/platform/backstage/scripts/app-config.yaml:/app/app-config.yaml  --env-file ./env.list tomelin/platform-demo:1722381134