package com.example.profesia.Security;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ResetCodeRepository extends JpaRepository<ResetCode, Long> {
    @Query(value = "SELECT * FROM reset_code WHERE code = ?1", nativeQuery = true)
    ResetCode findByCode(String code);
}
