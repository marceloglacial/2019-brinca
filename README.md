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

### CI/CD
- <a href="#deploy">FTP Deploy</a> integrated


## Installation

1. <a href="https://docs.docker.com/compose/install/">Install Docker Compose</a>
2. [Install npm](https://www.npmjs.com/get-npm)
3. [Install Gulp](https://gulpjs.com)
4. Run installation on terminal: 

```terminal
    npm install 
```

# How to Use

- `npm run frontend` - Start front-end developement
- `npm run back` - Start backe-end developement

# Deploy

1. Fill FTP credentials and server info on `credentials-sample.json` 
2. Rename `credentials-sample.json` to `credentials.json`

<strong>NOTE:</strong>
Due sensitive information, `credentials.json` WILL NOT BE on version control.

Gulp tasks for deployment: 

- `gulp frontend:deploy` - Deploy front-end
- `gulp backend:deploy` - Deploy back-end

# References
- Project based on <a href="https://github.com/marceloglacial/snowfall-boilerplate">Snowfall Boilerplate</a> 
