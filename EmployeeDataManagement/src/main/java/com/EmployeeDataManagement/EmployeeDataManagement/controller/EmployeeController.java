package com.EmployeeDataManagement.EmployeeDataManagement.controller;

import com.EmployeeDataManagement.EmployeeDataManagement.entity.EmployeeEntity;
import com.EmployeeDataManagement.EmployeeDataManagement.repository.EmployeeRepo;
import com.EmployeeDataManagement.EmployeeDataManagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {
    @Autowired
    public EmployeeService employeeService;

    @GetMapping("/getDetails")
    public List<EmployeeEntity> getEmployeeDetails(){
        return employeeService.getDetails();
    }

    @PostMapping("/addDetails")
    public EmployeeEntity addEmployeeDetails(@RequestBody EmployeeEntity emp){
        return employeeService.addDetails(emp);
    }

    @GetMapping("/getDetails/{id}")
    public EmployeeEntity getEmployeeDetailsById(@PathVariable long id){
        return employeeService.getDetailsById(id);
    }

    @PutMapping("/updateDetails/{id}")
    public EmployeeEntity updateEmployeeDetailsById(@PathVariable Long id, @RequestBody EmployeeEntity emp){
        return employeeService.updateDetailsById(id,emp);
    }

    @DeleteMapping("/deleteDetails/{id}")
    public Map<String, Boolean> deleteEmployeeById(@PathVariable Long id){
        return employeeService.deleteDetailsById(id);
    }


}
