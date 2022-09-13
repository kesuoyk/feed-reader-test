# package.jsonを作成し、最低限のパッケージをインストールする
init:
	docker-compose run --rm -v ./:/usr/src/app frontend \
		npm init -y \
		&& npm install --save-prod \
			react \
			react-dom \
			react-router-dom \
		&& npm install --save-dev \
			webpack \
			webpack-cli \
			ts-loader \
			typescript \
			@types/react \
			@types/react-dom
