package com.example.dashboard.service;

import com.example.dashboard.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public void updateUser(User user);
    public void deleteUser(int id);
    public User getUserByEmail(String email);


}
