package com.example.dashboard.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class UserWidgets {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name="id_user_fk")
    private User user;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name="id_widget_fk")
    private Widgets widget;
    @ElementCollection
    private List<String> settings;
    private Boolean activate;

    public UserWidgets(int id, User user, Widgets widget, Boolean activate) {
        this.id=id;
        this.user = user;
        this.widget = widget;
        this.activate = activate;
    }

    public UserWidgets() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Widgets getWidget() {
        return widget;
    }

    public void setWidget(Widgets widget) {
        this.widget = widget;
    }

    public List<String> getSettings() {
        return settings;
    }

    public void setSettings(List<String> settings) {
        this.settings = settings;
    }

    public Boolean getActivate() {
        return activate;
    }

    public void setActivate(Boolean activate) {
        this.activate = activate;
    }



}
