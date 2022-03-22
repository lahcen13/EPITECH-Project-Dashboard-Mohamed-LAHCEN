package com.example.dashboard.controller;

import com.example.dashboard.model.User;
import com.example.dashboard.model.UserWidgets;
import com.example.dashboard.model.Widgets;
import com.example.dashboard.service.UserService;
import com.example.dashboard.service.UserWidgetsService;
import com.example.dashboard.service.WidgetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserWidgetsService userWidgetsService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "user added";
    }
    @GetMapping("/find")
    public List<User> find() {
        return userService.getAllUsers();
    }
    @PostMapping("/delete")
    public String delete(@RequestBody User user){
        userService.deleteUser(user.getId());
        return "user deleted";
    }
    @PostMapping("/update")
    public String update(@RequestBody User user){
        userService.updateUser(user);
        return "user updated";
    }

    @PostMapping("/connected")
    public List<UserWidgets> connected(@RequestBody User user ){
        User connected= userService.getUserByEmail(user.getEmail());
        List<UserWidgets> widgets= userWidgetsService.activatedWidgets(connected);
        return widgets;
    }
}
