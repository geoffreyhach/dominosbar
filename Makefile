HOST_GROUP_ID = $(shell id -g)
HOST_USER = ${USER}
HOST_UID = $(shell id -u)

export HOST_UID
export HOST_USER
export HOST_GROUP_ID

# Uncomment the appropriate line depending on your Docker Compose version:
# DOCKER-COMP = docker-compose   # For Docker Compose v1
DOCKER-COMP = docker compose   # For Docker Compose v2

DOCKER_COMPOSE_DEV = $(DOCKER-COMP) -f docker-compose.yml -f docker-compose.dev.yml 
DOCKER_COMPOSE = $(DOCKER-COMP) -f docker-compose.yml 

DOCKER_RUN_NEXTJS_BASH_COMMAND = run --rm nextjs bash -ci
DOCKER_RUN_STRAPI_BASH_COMMAND = run --rm strapi bash -ci


## DEV
install:
	$(MAKE) stop || true
	$(DOCKER_COMPOSE_DEV) pull
	$(DOCKER_COMPOSE_DEV) build
	$(MAKE) install-strapi
	$(MAKE) start

install-react:
	$(DOCKER_COMPOSE_DEV) $(DOCKER_RUN_NEXTJS_BASH_COMMAND) 'npm install -f'

start:
	$(DOCKER_COMPOSE_DEV) up -d

stop:
	$(DOCKER_COMPOSE_DEV) down

node-connect:
	$(DOCKER_COMPOSE_DEV) exec nextjs ash

strapi-connect:
	$(DOCKER_COMPOSE_DEV) exec strapi ash

# ## DB
# dump-strapi: #dump strapi db
# 	$(DOCKER_COMPOSE_DEV)  exec postgres pg_dump -U labouture -d labouturepostgres > ./dump/strapi_dump

# import-dump-strapi:## Drop and recreate the database, then import structure and content
# 	$(DOCKER_COMPOSE) down
# 	$(DOCKER_COMPOSE) up -d postgres
# 	$(DOCKER_COMPOSE) exec postgres bash -ci 'dropdb -U labouture labouturepostgres'
# 	$(DOCKER_COMPOSE) exec postgres bash -ci 'createdb -U labouture labouturepostgres'
# 	$(DOCKER_COMPOSE) exec postgres bash -ci 'psql -U labouture -d labouturepostgres < /dump/strapi_dump'

## PROD
prod-install:
	$(DOCKER_COMPOSE) down
	$(DOCKER_COMPOSE) pull
	$(MAKE) delete-strapi-types
	$(MAKE) prod-install-react
	$(DOCKER_COMPOSE) build
	$(MAKE) prod-start

prod-install-react:
	$(DOCKER_COMPOSE) $(DOCKER_RUN_NEXTJS_BASH_COMMAND) 'npm install --force'

prod-start:
	$(DOCKER_COMPOSE) up -d

prod-stop:
	$(DOCKER_COMPOSE) down

delete-strapi-types:
	$(DOCKER_COMPOSE) $(DOCKER_RUN_STRAPI_BASH_COMMAND) 'rm -rf ./types/*'


## MISC

react-logs:
	$(DOCKER_COMPOSE) logs -f nextjs	
	
react-connect:
	$(DOCKER_COMPOSE) exec nextjs bash	

strapi-logs:
	$(DOCKER_COMPOSE) logs -f strapi	

strapi-connect:
	$(DOCKER_COMPOSE) exec strapi bash	

postgres-logs:
	$(DOCKER_COMPOSE) logs -f postgres	
	
postgres-connect:
	$(DOCKER_COMPOSE) exec postgres bash	
