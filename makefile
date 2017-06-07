SHELL := /bin/bash

# Colors
# -----------------------------------------------------------------------------
YELLOW = \033[1;33m
CYAN = \033[1;36m
NC   = \033[0m

# Paths
# -----------------------------------------------------------------------------
BOWER = bower_components
ASSETS = public/assets
JS_VENDOR = $(ASSETS)/scripts/vendor

# Actions
# -----------------------------------------------------------------------------
all:
	@echo
	@echo -e "${CYAN}  HBBP - Harp Bootstrap BoilerPlate${NC}"
	@echo
	@echo "  Avaliable commands:"
	@echo
	@echo "    install      Install Bower dependencies of this project"
	@echo "    clean        Remove installed Bower dependecies"
	@echo "    chmod        Change files & directory permissions to 750 & 640"
	@echo "    harp         Install NodeJS, Bower and Harp (Ubuntu/Debian)"
	@echo
	@echo "  Usage: make <command>"
	@echo

install:
	@echo -e "${YELLOW}Installing Bower dependencies${NC}"
	bower install

	@echo -e "${YELLOW}Creating vendor directory${NC}"
	mkdir public/assets/scripts/vendor/ || echo "Already have vendor directory!"

	@echo -e "${YELLOW}Copy required assets from bower components${NC}"
	cp $(BOWER)/html5shiv/dist/html5shiv.js         	$(JS_VENDOR)
	cp $(BOWER)/html5shiv/dist/html5shiv.min.js     	$(JS_VENDOR)
	cp $(BOWER)/respond/dest/respond.src.js         	$(JS_VENDOR)/respond.js
	cp $(BOWER)/respond/dest/respond.min.js         	$(JS_VENDOR)

clean:
	@echo -e "${YELLOW}Removing installed dependencies${NC}"
	rm -rf $(BOWER)
	rm -rf www
	rm -rf $(JS_VENDOR)/*

chmod:
	@echo -e "${YELLOW}Changing permissions${NC}"
	find ./ -type d -exec chmod 750 {} \
	find ./ -type f -exec chmod 640 {} \

harp:
	@echo -e "${YELLOW}Installing NodeJS${NC}"
	sudo apt-get install nodejs npm
	sudo ln -s /usr/bin/nodejs /usr/bin/node
	@echo -e "${YELLOW}Installing Bower and Harp{NC}"
	sudo npm install -g bower harp
