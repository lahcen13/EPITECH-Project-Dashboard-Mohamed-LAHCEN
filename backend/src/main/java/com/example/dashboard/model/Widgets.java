package com.example.dashboard.model;

import javax.persistence.*;

@Entity
public class Widgets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name="id_service_fk")
    private Services service;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Services getService() {
        return service;
    }

    public void setService(Services service) {
        this.service = service;
    }


}
