package com.EmployeeDataManagement.EmployeeDataManagement.service;

import com.EmployeeDataManagement.EmployeeDataManagement.controller.EmployeeController;
import com.EmployeeDataManagement.EmployeeDataManagement.entity.EmployeeEntity;
import com.EmployeeDataManagement.EmployeeDataManagement.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeService {
    @Autowired
    public EmployeeRepo employeeRepo;

    public EmployeeEntity addDetails(EmployeeEntity emp){
        return employeeRepo.save(emp);
    }

    public List<EmployeeEntity> getDetails(){
        return employeeRepo.findAll();
    }

    public EmployeeEntity getDetailsById(Long id){
        return employeeRepo.findById(id).orElse(null);
    }

    public EmployeeEntity updateDetailsById(Long id, EmployeeEntity emp){
        EmployeeEntity e = employeeRepo.findById(id).orElse(null);
        e.setFirstname(emp.getFirstname());
        e.setLastname(emp.getLastname());
        e.setEmail(emp.getEmail());
        e.setSalary(emp.getSalary());
        return employeeRepo.save(e);
    }

    public Map<String, Boolean> deleteDetailsById(Long id){
        EmployeeEntity emp = employeeRepo.findById(id).orElse(null);
        employeeRepo.delete(emp);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return response;
    }

}
