FROM debian:12

RUN apt-get update && apt-get install -y curl
RUN apt-get install -y git
RUN curl -fsSL https://deb.nodesource.com/setup_23.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs
RUN node -v

WORKDIR /leaflet-project/

EXPOSE 80
EXPOSE 443
EXPOSE 3000

ENTRYPOINT [ "bash", "ini.sh" ]