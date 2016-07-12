[![Build
Status](https://travis-ci.org/adabriand/omnimusic.svg?branch=master)](https://travis-ci.org/adabriand/omnimusic)
Omnimusic
==============================

[Omnimusic](https://omnimusic.herokuapp.com/) (a/k/a Omni) was born at january 22, 2013 as a Tumblr page where our collaborators could share a mix of new/old songs of all genres in one place. The Omni's interface on its first year enabled visitors to discover songs through a radio player, search and by a carefully organized set of genre tags. Unfortunately, a digital rights owner has forbidden the stream of some songs and, consequently, the Tumblr had to take down the page.

One year later, we've decided to revive the project as a new and independent website with the same goals of the previous version. Furthermore, we've planned to add some playlists features to enhance the users' experience while they're discovering songs.

This version is an alpha one. We're incrementally adding small features and testing UI designs until we achieve a enjoyable experience that we desire for our users. The project's code is currently under GPLv3 license, meaning you can freely re-use it and change it.

Requirements
------------------------------
To *run* Omnimusic, you only need
* Node.js (v0.10.25 or above)
* Bower (v1.7.9 or above)
* Gulp (v3.9.1 or above)

Installation
------------------------------
1. Install the dependencies:
  1. `bower install`
  2. `npm install`
2. Run the web server: `gulp start`
* If you want to change the default values for hostname `localhost` and port `3000`, you need to set up the environment variables - `HOST` and `PORT`.

Main Gulp Commands
------------------------------
* `gulp start-dev`: it starts the server on development mode.
* `gulp tdd`: it automatically compiles Sass files and runs Jasmine tests if there is changes on the source code.
* `gulp test`: it runs all Jasmine tests once.
* `gulp dist`: it builds the production code on the folder `frontend/dist`.
