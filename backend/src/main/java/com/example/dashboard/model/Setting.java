package com.example.dashboard.model;

public class Setting {
    private int id;
    private String setting;
    private int position;

    public Setting(int id, String setting, int position) {
        this.id = id;
        this.setting = setting;
        this.position = position;
    }
    public Setting(int id, String setting){
        this.id = id;
        this.setting = setting;
    }
    public Setting(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSetting() {
        return setting;
    }

    public void setSetting(String setting) {
        this.setting = setting;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}
