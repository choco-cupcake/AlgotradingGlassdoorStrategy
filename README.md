# Algorithmic trading strategy - Glassdoor exotic data

Algorithmic trading can be boring, but with a bit of imagination and using exotic data sources, it can also be really fun. 

### Warren Buffet used to say you gotta invest in people, not in businesses.

My elaboration of it is that markets always change and evolve, and business have to pivot or die.


## :exclamation: Work in progress - this repo contains scripts used during the still ongoing research phase



### The strategy
So the idea here is to create a portfolio management algorithm guided by some metrics about companies upper management's quality.

The strategy would be a portfolio rebalancing one: starting with a pool of the 2000-1000 most liquid stocks, reduce the number to the top 200-100 according to the defined metrics. Define a rebalancing period and keep going like that.

But where to get the data?

Turns out GlassDoor has a feature for employees to rate their employer company over different metrics, and yes, 'CEO ratings' and 'Upper Management ratings' are included.

But having just the current values is useless since you can't check historical correlations, right? Well, GlassDoor is so nice to offer also historic data with montly granularity starting from sept '20. 

Numbers of reviews seem to be sufficiently large for most of the stocks, enough to give it a shot paying special care to this aspect.

#### The plan here is to:
- Crawl all the data needed from Glassdoor, Google, TradingView stock screener - mainly Node.js
- Formulate ideas and check correlations and other metrics in Python
- If the strategy shows signs of an alpha, go on inspecting the logic
- Build the portfolio management application interfacing with a funded live broker account
