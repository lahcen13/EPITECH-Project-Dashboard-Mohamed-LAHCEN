package com.example.dashboard.service;

import com.example.dashboard.model.User;
import com.example.dashboard.model.UserWidgets;
import com.example.dashboard.model.Widgets;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserWidgetsService {
    public List<String> getWidgetSettings(int user, int widgets);
    void updateSettings(UserWidgets id,String param, String setting);
    List<UserWidgets> activatedWidgets(User user);
    List<String> showUserWidgets(User user);
    void updateDesactivate(UserWidgets id);
    void updateActivate(UserWidgets id);
    void deleteAll();
    void updateWidgetMultiple(String setting, int position, int id);

}