# Algorithmic trading strategy - Glassdoor exotic data
<br>
Algorithmic trading can be boring, but with a bit of imagination and using exotic data sources, it can also be really fun. 

### Warren Buffet used to say you gotta invest in people, not in businesses.

i.e. markets always change and evolve, and businesses have to pivot or die.
<br><br>
## :exclamation: Work in progress - this repo contains scripts used during the still ongoing research phase
<br>

### The strategy
##### Note: I don't work in the field, algorithmic trading is an hobby of mine, I'm a software engineer with very limited finance education trying to approach the problem in a professionalish way. 
<br>

The idea here is to create a portfolio management algorithm guided by some metrics about companies upper management's quality.

The strategy would be a portfolio rebalancing one: starting with a pool of the 1000-2000 most liquid stocks, reduce the number to the top 100-200 according to the defined metrics. Define a rebalancing period and keep going like that.

But where to get the data?

Turns out GlassDoor has a feature for employees to rate their employer company over different metrics, and yes, 'CEO ratings' and 'Upper Management ratings' are included.

But having just the current values is useless since you can't check historical correlations, right? Well, GlassDoor is so nice to offer also historic data with montly granularity starting from sept '20. 

Numbers of reviews seem to be sufficiently large for most of the stocks, enough to give it a shot paying special care to this aspect.

#### The plan here is to:
- Crawl all the data needed from Glassdoor, Google, TradingView stock screener - mainly Node.js
- Formulate ideas and check correlations and other metrics in Python
- If the strategy shows signs of an alpha, go on inspecting and defining the logic, to eventually build the portfolio management application interfacing with a funded trading account
- If it doesn't, the most likely option here, don't push it. Just polish the repo and go on with the next project. 

