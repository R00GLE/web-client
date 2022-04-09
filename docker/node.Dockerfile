FROM node:14-alpine3.15

ARG DEBIAN_FRONTEND=noninteractive

ARG CONTAINER_USER=reconmapper
ARG CONTAINER_GROUP=reconmapper

ARG HOST_UID=1000
ARG HOST_GID=1000

RUN deluser --remove-home node
RUN addgroup -g 1000 reconmapper && \
adduser -u 1000 -g reconmapper -s /bin/sh reconmapper

RUN apk update && apk add git

ENV DISABLE_OPENCOLLECTIVE true
ENV PATH /home/reconmapper/node_modules/.bin:$PATH

WORKDIR /home/reconmapper
USER reconmapper
