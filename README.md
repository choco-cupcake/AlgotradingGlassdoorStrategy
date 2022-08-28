# WIP - Algorithmic trading strategy - Glassdoor exotic data

Algorithmic trading can be boring, but with a bit of imagination and using exotic data sources, it can also be really fun. 

### Warren Buffet used to say you gotta invest in people, not in businesses.

My elaboration of is is that markets always change and evolve, and business have to pivot or die.

### The strategy
So the idea here is to create portfolio management algorithm guided by some metrics about companies upper management's quality.

The strategy would be a portfolio rebalancing one: starting with a pool of the 1500 most liquid stocks, reduce the number to the top 100-200 according to the defined metrics.

But where to get the data?

Turns out GlassDoor has a feature for employees to rate their employer company over different metrics, and yes, 'CEO ratings' and 'Upper Management ratings' are included.

But having just the current values is useless since you can't check historical correlations, right? Well, GlassDoor is so nice to offer also historic data with montly granularity starting from sept '20.

#### The plan here is to:
- Crawl all the data needed from Glassdoor, Google, TradingView stock screener
- Formulate ideas and check correlations and other metrics in python
- If the strategy shows sign of an alpha, go on inspecting the logic
- Build the portfolio management application interfacing with a funded live broker account
