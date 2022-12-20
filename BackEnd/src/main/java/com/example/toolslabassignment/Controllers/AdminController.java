package com.example.toolslabassignment.Controllers;

import com.example.toolslabassignment.entities.Admin;
import com.example.toolslabassignment.entities.Station;
import com.example.toolslabassignment.entities.Trip;
import com.example.toolslabassignment.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Admin")
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class AdminController {
    @Autowired
    AdminService adminService;

    @PostMapping("/SignUp")
    public String SignUp(@RequestBody Admin a){
        return adminService.SignUp(a);
    }

    @PostMapping("/SignIn")
    public String SignIn(@RequestBody Admin a){
        return adminService.SignIn(a);
    }

    @GetMapping("/get/{id}")
    public Admin getAdminById(@PathVariable Long id){
        return adminService.getAdmin(id);
    }

    @GetMapping("/getall")
    public List<Admin> getAllAdmins(){
        return adminService.getAllAdmins();
    }
    @GetMapping("/getall/Trips")
    public List<Trip> getAllTrips(){
        return adminService.getAllTrips();
    }
    @GetMapping("/getall/Stations")
    public List<Station> getAllStations(){
        return adminService.getAllStations();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAdmin(@PathVariable Long id){
        adminService.deleteAdmin(id);
    }
    @DeleteMapping("/delete/Trip/{id}")
    public String deleteTrip(@PathVariable Long id){
        return  adminService.deleteTrip(id);
    }
    @PostMapping("/CreateTrip")
    public String createTrip(@RequestBody Trip t){
        return adminService.addtrip(t);
    }
    @PutMapping ("/Update/Trip/{id}")
    public String updateTrip(@RequestBody Trip t,@PathVariable Long id){
       return adminService.updateTrip(t,id);
    }

    @PutMapping ("/Update/{id}")
    public String updateAdmin(@RequestBody Admin a,@PathVariable Long id){
        return adminService.updateAdmin(a,id);
    }

}
