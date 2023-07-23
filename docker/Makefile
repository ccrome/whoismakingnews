IMAGE_NAME = "hugo_devel"
UID = $(shell id -u)
GROUPS = $(shell id -g)
all:
	docker build -t $(IMAGE_NAME) .

run:	
	docker run \
		-it \
		--rm \
		-p 1313:1313 \
		$(IMAGE_NAME)


#		--user $(UID):$(GROUPS) \
#		-v $(PWD)/..:/app \
