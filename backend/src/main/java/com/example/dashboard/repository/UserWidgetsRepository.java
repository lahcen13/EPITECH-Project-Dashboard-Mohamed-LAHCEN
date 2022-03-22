package com.example.dashboard.repository;

import com.example.dashboard.model.User;
import com.example.dashboard.model.UserWidgets;
import com.example.dashboard.model.Widgets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UserWidgetsRepository extends JpaRepository<UserWidgets,Integer> {
    //select the settings specific widget and user
    @Query(value="SELECT user_widgets_settings.settings,user_widgets_settings.parameter FROM user_widgets_settings INNER JOIN user_widgets ON user_widgets.id=user_widgets_settings.user_widgets_id  WHERE id_user_fk=:iduser & id_widget_fk=:idwidget", nativeQuery=true)
    List<String> findWidgetSettings(@Param("iduser") int iduser, @Param("idwidget") int idwidget);
    //get all user widgets
    @Query(value="SELECT id as `id`, id_user_fk as `user`, id_widget_fk as `widget` , activate as `activate` from user_widgets where id_user_fk=:id ", nativeQuery=true)
    List<String> getUserWidgets(@Param("id") int id);
    //update settings of a widget
    @Query(value="UPDATE user_widgets_settings SET parameter=:parameter WHERE settings=:setting and user_widgets_id=:id ", nativeQuery=true)
    void updateWidgetSettings(@Param("parameter") String parameter, @Param("setting") String setting, @Param("id") int id);

    @Transactional
    @Modifying
    @Query(value="UPDATE user_widgets_settings SET settings=:setting where  position=:position and user_widgets_settings.user_widgets_id=:id", nativeQuery=true)
    void updateWidgetMultipleSettings(@Param("setting") String setting, @Param("position") int position, @Param("id") int id);

    //activate widget
    @Query(value="UPDATE user_widgets SET activate=1 WHERE id=:id ", nativeQuery=true)
    void updateActivateWidget(@Param("id") int id);
    //desactivate widget
    @Query(value="UPDATE user_widgets SET activate=0 WHERE id=:id ", nativeQuery=true)
    void updateDesactivateWidget(@Param("id") int id);


    //activated widgets
    @Query(value="SELECT * FROM user_widgets where user_widgets.id_user_fk=:id ", nativeQuery=true)
    List<UserWidgets> selectActivatedWidget(@Param("id") int id);




}
