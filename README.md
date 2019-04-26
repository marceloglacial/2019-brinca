# BRINCA Website (2019)

Brazil-Canada Community Association's website

## Features

### Design

 - <a href="https://www.sketchapp.com/">Sketch</a> and <a href="https://www.figma.com/">Figma</a> templates
 - Desktop, tablet and phone artboards
 - Default web icons, tiles and favicons 
 - WordPress screenshot artboards

### Front-end
- <a href="https://github.com/thedaviddias/Front-End-Checklist">Front-end checklist</a> ready
- <a href="https://sass-lang.com/">SASS</a> ready
- <a href="https://sass-guidelin.es/#architecture">SASS Architecture</a> ready
- <a href="https://pugjs.com/">PugJS</a> templates ready
- <a href="https://www.browsersync.io/">Browser Live Reloading</a>

### Back-end
- <a href="https://docs.docker.com/compose/wordpress/">WordPress Docker Compose</a> ready
- <a href="https://www.browsersync.io/">Browser Live Reloading</a>

### Automation
- HTML minify on build (optional)
- JS minify on build
- Optmized Images on build
- <a href="https://www.browsersync.io/">BrowserSync Live Reloading</a>

### CI/CD
- <a href="#deploy">FTP Deploy</a> integrated
- <a href="#deploy">Travis CI</a> ready


## Installation

1. <a href="https://docs.docker.com/compose/install/">Install Docker Compose</a>
2. [Install npm](https://www.npmjs.com/get-npm)
3. [Install Gulp](https://gulpjs.com)
4. Run installation on terminal: 

```terminal
    npm install 
```

# How to Use

## Front-end

- `npm run frontend` - Start developement

### Gulp tasks
- `frontend:start` - Start Browser Live reloading and watch SASS files.
- `frontend:build` - Minify HTML/CSS/JS, Optimize images and copy do dist folder.
- `frontend:deploy` - Build and upload all `front-end/dist` files to FTP server.

## Back-end

- `npm run backend` - Start developement

### Gulp tasks
- `backend:install` - Download WordPress latest version, unzip it and setup a server folder.
- `backend:start` -  Start Browser Live reloading and watch SASS files.
- `backend:deploy` -  Build theme and upload all `back-end/src` files to FTP server.

# References
- Project based on <a href="https://github.com/marceloglacial/snowfall-boilerplate">Snowfall Boilerplate</a> 
