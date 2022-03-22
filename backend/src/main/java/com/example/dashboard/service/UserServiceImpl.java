package com.example.dashboard.service;

import com.example.dashboard.model.User;
import com.example.dashboard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public User getUserByEmail(String mail) {
        return userRepository.getByEmail(mail);
    }

    @Override
    public void updateUser(User user){
        User update= userRepository.getById(user.getId());
        update.setAddress(user.getAddress());
        update.setAge(user.getAge());
        update.setEmail(user.getEmail());
        update.setCity(user.getCity());
        update.setFirstName(user.getFirstName());
        update.setLastName(user.getLastName());
        userRepository.save(update);
    }

}
