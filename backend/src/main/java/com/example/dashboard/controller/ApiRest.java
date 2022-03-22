package com.example.dashboard.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@RestController
public class ApiRest {

    @GetMapping("/weither")
    public String weither(@RequestParam String city) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=a81c546c08057d051733953c668e6342")).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }

    //https://developers.themoviedb.org/3/getting-started/introduction
    @GetMapping("/movie")
    public String movie() throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create("https://api.themoviedb.org/3/movie/550?api_key=868d26a70ca0a068164556b7dbd5f7fc")).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }



    //https://www.currencyconverterapi.com/docs
    @GetMapping("/convert")
    public String convert(@RequestParam String currency1, @RequestParam String currency2) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://free.currconv.com/api/v7/convert?q="+currency1+"_"+currency2+"&compact=ultra&date=2021-01-10&apiKey=32f87408a834d1e4fb97"))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
    @GetMapping("/listCurrencies")
    public String listCurrencies() throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://free.currconv.com/api/v7/currencies?apiKey=32f87408a834d1e4fb97"))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();


    }
    @GetMapping("/steam")
    public String steam() throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/"))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }

    //  https://newsapi.org/
    @GetMapping("/news")
    public String news(@RequestParam String type) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://newsapi.org/v2/everything?q="+type+"&language=en&apiKey=ae88cf81cb214c46a37b4fb267a29179"))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}
