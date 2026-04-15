CONTAINER_NAME := nankasuisui-nginx
IMAGE := docker.io/library/nginx:alpine
PORT := 8080

.PHONY: start stop

start: stop
	podman run -d \
		--name $(CONTAINER_NAME) \
		-p $(PORT):80 \
		-v "$(CURDIR):/usr/share/nginx/html" \
		$(IMAGE)
	@echo "http://localhost:$(PORT)/"

stop:
	-podman stop $(CONTAINER_NAME)
	-podman rm $(CONTAINER_NAME)
