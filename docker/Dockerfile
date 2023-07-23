FROM alpine:3.18

RUN apk update && apk upgrade
RUN apk add hugo
RUN apk add git

RUN apk add supervisor

RUN cd / && git clone https://github.com/ccrome/whoismakingnews.git --recursive app
COPY supervisord.ini /app/supervisord.ini
RUN mkdir -p /var/log/supervisor
WORKDIR /app
RUN git checkout develop && git pull && git submodule update --init --recursive

CMD ["supervisord", "-c", "/app/supervisord.ini"]
