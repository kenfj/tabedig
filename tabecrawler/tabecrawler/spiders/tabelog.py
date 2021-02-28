import scrapy


class TabelogSpider(scrapy.Spider):
    name = 'ebisu'
    allowed_domains = ['tabelog.com']
    start_urls = [
        'https://tabelog.com/tokyo/A1303/A130302/',
    ]

    def parse(self, response):
        rst_links = response.css("a.list-rst__rst-name-target")
        yield from response.follow_all(rst_links, self.parse_rst)

        # pagination_links = response.css('a.c-pagination__arrow--next')
        # yield from response.follow_all(pagination_links, self.parse)

    def parse_rst(self, response):
        rvw_links = response.css("li#rdnavi-review a.mainnavi")
        yield from response.follow_all(rvw_links, self.parse_rvw)

    def parse_rvw(self, response):
        url = response.url.rstrip("/")
        _, _, _, pal, prf, area, rstid, _ = url.split("/", 7)
        rstname = response.xpath("//meta[@property='og:title']/@content").get()
        rstrating = response.css('span.rdheader-rating__score-val-dtl::text').get()

        for item in response.css("div.rvw-item"):
            rvwer = item.css("span.lev span:first-child::text").get()
            types = item.css('span.c-rating-v2__time::text').getall()
            ratings = item.css('b.rvw-item__ratings--val::text').getall()

            if len(ratings) == 1 or ratings[0] != '-':
                rvwtype = types[0].replace('の点数：', '')
                rating = ratings[0]
            elif ratings[0] == '-':
                rvwtype = types[1].replace('の点数：', '')
                rating = ratings[1]
            else:
                self.log(f'Invalid Data: {rvwer} {types} {ratings}')
                continue

            yield(dict(pal=pal, prf=prf, area=area, rstid=rstid, rstname=rstname, rstrating=rstrating, rvwer=rvwer, rvwtype=rvwtype, rating=rating, url=url))

        yield from response.follow_all(css='a.c-pagination__arrow--next', callback=self.parse_rvw)
