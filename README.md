# Restaurant Reviews App (Stage 1)
This project is developed for Google/Udacity Front End Web Development Nanodegree (Project 6).

## Table of Contents

* [Project](#project)
* [Dependencies](#dependencies)
* [Bugs](#bugs)
* [Contributing](#contributing)
* [Installation](#installation)

## Project 
To made existing Restaurant Reviews App to be:

- 1. Mobile Responsive
- 2. Implement accessibility features
- 3. Add ServiceWorker script for a offline availability


## Dependencies
I have used the following Code Dependencies:

- Starter code forked from [Udacity](https://github.com/udacity/mws-restaurant-stage-1). 
-  [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/) used to display map on page. You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

## Bugs
I have noticed one bug in dev tools, I wasn´t able to solve:
"Uncaught (in promise) TypeError: Request scheme 'chrome-extension' is unsupported at sw.js:71" 
-  [Google Chrome Extension Error](https://github.com/zeit/next.js/issues/1269)
- [Google Chrome Extension Error2](https://github.com/GoogleChromeLabs/sw-toolbox/issues/171) 

## Installation
To start using this project follow these steps:
1. Git clone [repository](https://github.com/dianavile/mws-restaurant-stage-1.git).
2. Open the code directory `cd Restauran-Reviews-App`.
3. In a terminal, check the version of Python you have `python -V`.
4. If you have Python 2.x `python -m SimpleHTTPServer 8000`.
5. If you have Python 3.x. `python3 -m http.server 8000`.
6. Open in browser [http://localhost:8000/](http://localhost:8000/).
7. If you use Visual Code Studio Online Editor, like I did:
change the localhost to port 5500.[http://localhost:5500/](http://localhost:5500/).

## Browser compatibility
The site was only tested on Google chrome.


