package com.example.dashboard.service;

import com.example.dashboard.model.User;
import com.example.dashboard.model.UserWidgets;
import com.example.dashboard.model.Widgets;
import com.example.dashboard.repository.UserWidgetsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserWidgetsServiceImpl implements UserWidgetsService {
    @Autowired
    private UserWidgetsRepository userWidgetsRepository;

    @Override
    public List<String> getWidgetSettings(int user, int widgets) {
        return userWidgetsRepository.findWidgetSettings(user,widgets);
    }
    @Override
    public void updateActivate(UserWidgets id){
        userWidgetsRepository.updateActivateWidget(id.getId());
    }

    @Override
    public void updateDesactivate(UserWidgets id){
        userWidgetsRepository.updateDesactivateWidget(id.getId());
    }
    @Override
    public List<String> showUserWidgets(User user){
        return userWidgetsRepository.getUserWidgets(user.getId());
    }
    @Override
    public List<UserWidgets> activatedWidgets(User user){
        return userWidgetsRepository.selectActivatedWidget(user.getId());
    }
    @Override
    public void updateSettings(UserWidgets id,String param, String setting){
        userWidgetsRepository.updateWidgetSettings(param,setting, id.getId());
    }
    @Override
    public void updateWidgetMultiple(String setting, int position, int id){
        userWidgetsRepository.updateWidgetMultipleSettings(setting, position, id);
    }

    @Override
    public void deleteAll(){

    }



}
