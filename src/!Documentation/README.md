# This is documentation for the MomentEvents developers.

This website is deployed using Netlify through Kyle Wade's Netlify account (which is free and we are more than welcome to switch it off to a shared account). Netlify checks every commit to the `gh-pages` branch for deployment, which, whenever someone runs `npm run deploy`, adds a new commit to the `gh-pages` branch. `npm run deploy` creates an optimized build that can be served on github pages without any node building. What makes this especially important when we work with Netlify is that it takes Netlify approximately 3 seconds to build the website instead of the usual 2 minutes. Since Netlify accounts are charged based on the number of build minutes, we can save costs by simply building an optimized build locally, then committing it to a separate branch with that website already built so Netlify doesn't have to build it for us.

# Common Questions

Q: Why don't we just host the website using github pages directly instead of using Netlify?

A: With github pages, we actually can't use react router because anything after `momentevents.app/` will cause github pages to try to find a file with that same name after the slash on the server. We want to only redirect routes locally and not try to find files remotely. Unfortunately, the only way for us to do this with github pages is to use a hashrouter, but that adds a `#` after our route, which isn't ideal. The workaround here is to just use Netlify with a `_redirects` file that makes sure all redirects are only to go through the react router and not to find files on the server, which is what we do now.
