package com.example.dashboard.repository;

import com.example.dashboard.model.User;
import com.example.dashboard.model.Widgets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WidgetsRepository extends JpaRepository<Widgets,Integer> {

}
