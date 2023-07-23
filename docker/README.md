# Docker for running develop builds

Whenever files change in this directory, create a tag called
docker-rebuild-<version> and the docker will get rebuilt and re-served.

The docker will not change upon pushes do the develop or main, or any other branches for that matter.  It will only change on a tag.

The development docker is at https://whoismakingnews-3rgcn42vfa-uc.a.run.app.
