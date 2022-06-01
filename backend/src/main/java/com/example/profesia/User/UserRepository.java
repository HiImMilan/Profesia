package com.example.profesia.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM user WHERE email = ?1", nativeQuery = true)
    User findByEmail(@Param("email") String email);

    @Query(value = "SELECT * FROM user WHERE name = ?1", nativeQuery = true)
    User findByName(String name);

    @Query(value = "SELECT * FROM user INNER JOIN company_recrutors ON user.id=company_recrutors.recrutors_id INNER JOIN company ON company.id =company_recrutors.company_id WHERE user.email= ?1", nativeQuery = true)
    User isRecrutor(@Param("email") String email);

}
