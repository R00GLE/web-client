FROM node:14-alpine

ARG DEBIAN_FRONTEND=noninteractive

ARG CONTAINER_USER=reconmapper
ARG CONTAINER_GROUP=reconmapper

ARG HOST_UID=1000
ARG HOST_GID=1000

RUN deluser --remove-home node && \
adduser -D -u 1000 -g reconmapper -s /bin/sh reconmapper

RUN apk update && apk add git

ENV DISABLE_OPENCOLLECTIVE true
ENV PATH /home/reconmapper/node_modules/.bin:$PATH

WORKDIR /home/reconmapper
USER reconmapper
