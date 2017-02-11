#Task Messenger Web Server

Application for hosting React web app

###Usage

Replace sample contents of `/public` folder with your React app. The `index.html` of your React app must be directly 
under `/public` folder, like this `public/index.html`

- `cd` to root directory of the project 
- run `npm install`
- run `npm start`

To change the port on which server is listening modify `port` value in config.json

To change the API endpoint modify the `apiEndpoint` value in config.json. The value must be a full url, 
for example: `http://localhost:3001`


###Change log

####v0.0.1 in progress
- [ ] Responds with `index.html` from `/public` folder to any request except the `/api` prefixed requests
- [ ] Proxies all requests with `/api` prefix to API endpoint