package com.EmployeeDataManagement.EmployeeDataManagement.repository;

import com.EmployeeDataManagement.EmployeeDataManagement.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<EmployeeEntity, Long> {
}
