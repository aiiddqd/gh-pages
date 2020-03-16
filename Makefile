# build docker
build:
	docker-compose up --build

# remove docker
kill:
	docker-compose kill
	docker-compose rm -v --force
	docker-compose down -v --remove-orphans

# make public static site
gb:
	docker-compose run gatsby build

# run dev server with watcher in docker
ds:
	docker-compose up -d develop

rebuild: yarn-install gb

# test run cli
run-gatsby:
	docker-compose run gatsby info


# yarn dock https://classic.yarnpkg.com/ru/docs/migrating-from-npm/

# use yarn instead nmp
yarn-install:
	docker-compose run develop yarn install

yarn-install-force:
	docker-compose run develop yarn install --force

# upgrade yarn
yarn-upgrade:
	docker-compose run develop yarn upgrade

# not recommended
run-npm:
	docker-compose run develop npm install


# snippet for create app by hello world
app-create-hello-world:
	docker-compose run gatsby new /app/test https://github.com/gatsbyjs/gatsby-starter-hello-world

# snippet for create app by gatsby-starter-lumen
app-create-gatsby-starter-lumen:
	docker-compose run gatsby new gatsby-starter-lumen https://github.com/alxshelepenok/gatsby-starter-lumen
