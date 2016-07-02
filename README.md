[![Build
Status](https://travis-ci.org/adabriand/omnimusic.svg?branch=master)](https://travis-ci.org/adabriand/omnimusic)
Omnimusic
==============================

The [Omnimusic](https://omnimusic.herokuapp.com/) (a/k/a Omni) was born at january 22, 2013 as a Tumblr page where our collaborators could share a mix of new/old songs of all genres in one place. The Omni's interface on its first year enabled visitors to discover songs through a radio player, search and by a carefully organized set of genre tags. Unfortunately, a digital rights owner has forbidden the stream of some songs and, consequently, the Tumblr had to take down the page.

One year later, we've decided to revive the project as a new and independent website with the same goals of the previous version. Furthermore, we've planned to add some playlists features to enhance the users' experience while they're discovering songs.

This version is an alpha one. We're incrementally adding small features and testing UI designs until we achieve a enjoyable experience that we desire for our users. The project's code is currently under GPLv3 license, meaning you can freely re-use it and change it.

Requirements
------------------------------
To *run* the Omnimusic, you only need
* Node.js (v0.10.25 or above)

Installation
------------------------------
* Install the dependencies: `npm install`
* Run the web server: `node index.js` or `gulp start`
* If you want to change the default values for hostname `localhost` and port `3000`, you need to set up the environment variables - `HOST` and `PORT`.
