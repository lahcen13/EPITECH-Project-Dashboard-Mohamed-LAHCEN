package com.example.dashboard.service;

import com.example.dashboard.model.Widgets;
import com.example.dashboard.repository.UserWidgetsRepository;
import com.example.dashboard.repository.WidgetsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WidgetsServiceImpl implements WidgetsService {
    @Autowired
    private WidgetsRepository WidgetsRepository;


    @Override
    public List<Widgets> getWidgets() {
        return WidgetsRepository.findAll();
    }
}
