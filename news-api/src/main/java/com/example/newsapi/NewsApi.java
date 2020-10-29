package com.example.newsapi;

import java.util.List;
import java.util.Map;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class NewsApi {

  NewsRepository newsRepository;

  public NewsApi(NewsRepository newsRepository) {
    this.newsRepository = newsRepository;
  }

  @RequestMapping(method = RequestMethod.POST, path = "/news",
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE)
  public Article save(@RequestBody Article article) {
    System.out.println("article = " + article);
    return newsRepository.save(article);
  }

  @RequestMapping(method = RequestMethod.GET, path = "/news",
      produces = MediaType.APPLICATION_JSON_VALUE)
  public Map<String, Object> findAll() {
    List<Article> articles = newsRepository.findAll();
    return Map.of(
        "total", articles.size(),
        "articles", articles
    );
  }

}
