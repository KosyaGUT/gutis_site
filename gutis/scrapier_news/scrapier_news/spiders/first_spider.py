# import scrapy


# class FirstSpiderSpider(scrapy.Spider):
#     name = "first_spider"
#     allowed_domains = ["lk.sut.ru"]
#     start_urls = ["https://lk.sut.ru/cabinet/?login=yes"]

#     def parse(self, response):

#         news = driver.find_elements_by_xpath("//div[@class='card']/div")

#         for new in news:
#             yield {
#                     "title": new.find_element_by_xpath(".//h4[@class='card-title']").text,
#                     "date": new.find_element_by_xpath(".//h6[@class='card-subtitle mb-2 text-muted']").text,
#                     "anons": new.find_element_by_xpath(".//p[@class='card-text']").text,
#                     "id_new": new.find_element_by_xpath(".//p[@class='read-more']").get_attribute('onclick')
#                 }

