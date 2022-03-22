package com.example.dashboard.controller;

import com.example.dashboard.model.Setting;
import com.example.dashboard.model.User;
import com.example.dashboard.model.UserWidgets;
import com.example.dashboard.model.Widgets;
import com.example.dashboard.repository.UserWidgetsRepository;
import com.example.dashboard.service.UserService;
import com.example.dashboard.service.UserWidgetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/widget")
@CrossOrigin
public class UserWidgetsController {
    @Autowired
    private UserWidgetsService userWidgetsService;
    // getting the settings of a widget user.
    @GetMapping("/widgets")
    public List<String> getAllUserWidget(@RequestParam User user){
        return userWidgetsService.showUserWidgets(user);
    }
    @GetMapping("/widgetSettings")
    public List<String> getWidgetSettings(@RequestParam int idUser, int idWidget){
        return userWidgetsService.getWidgetSettings(idUser,idWidget);
    }
    @PostMapping("/activate")
    public void activateWidget(@RequestBody UserWidgets id) {
        userWidgetsService.updateActivate(id);
    }
    @PostMapping("/desactivate")
    public void desactivateWidget(@RequestBody UserWidgets id) {
        userWidgetsService.updateDesactivate(id);
    }
    @PostMapping("/activated")
    public List<UserWidgets> ActivatedWidgets(@RequestBody User user) {
        return userWidgetsService.activatedWidgets(user);
    }
    @GetMapping("/setting")
    public void UpdateWidgets(@RequestParam String parametere,String setting,UserWidgets id) {
        userWidgetsService.updateSettings(id,parametere,setting);
    }

    @PostMapping ("/settings")
    public void updateWidgetMultiple(@RequestBody Setting setting){
        userWidgetsService.updateWidgetMultiple(setting.getSetting(), setting.getPosition(), setting.getId());
    }

}

