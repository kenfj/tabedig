# Tabedig


## Setup

```bash
# initial setup
pipenv --python 3.8
pipenv install scrapy

# setup again
pipenv --rm
pipenv shell
pipenv sync     # or pipenv install
```

## Dev

* https://docs.scrapy.org/en/latest/intro/tutorial.html#extracting-data

```bash
scrapy shell 'https://tabelog.com/tokyo/A1303/A130302/'
```

## Run

```bash
scrapy crawl ebisu -o reviews.csv

# CSV to JSON
npx csvtojson reviews.csv > reviews.json
# https://qiita.com/masatomix/items/23ca68ad1f3b6be79ae4
```
