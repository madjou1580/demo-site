#!/bin/bash

IMAGE_NAME=my-demo-site
CONTAINER_NAME=my-demo-container

docker build -t $IMAGE_NAME .

docker run -d -t \
  --name $CONTAINER_NAME \
  -p 8888:80 \
  $IMAGE_NAME

echo "http://localhost:8888/"
