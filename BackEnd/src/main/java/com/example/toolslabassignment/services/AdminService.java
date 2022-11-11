package com.example.toolslabassignment.services;

import com.example.toolslabassignment.entities.Admin;
import com.example.toolslabassignment.entities.Station;
import com.example.toolslabassignment.entities.Trip;
import com.example.toolslabassignment.repositories.AdminRepo;
import com.example.toolslabassignment.repositories.TripRepo;
import com.example.toolslabassignment.services.TripService.*;
import com.example.toolslabassignment.repositories.stationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    AdminRepo ARepo;
    @Autowired
    stationRepo SRepo;
    @Autowired
    TripRepo TRepo;

    boolean temp = false;
    public String SignUp(Admin a){

        for(Admin x : ARepo.findAll())
        {
            if(x.getUsername().equals(a.getUsername()))
            {
                return "Username already taken !!";
            }
        }
        ARepo.save(a);
        return "success";
    }

    public String SignIn(Admin a)
    {
        for(Admin x : ARepo.findAll())
        {
            if(x.getUsername().equals(a.getUsername()) && x.getPassword().equals(a.getPassword()))
            {
                temp=true;
                return "Logged in successfully";

            }
        }
        return "No such user !!";
    }

    public Admin getAdmin(Long id){
        return ARepo.findById(id).get();
    }

    public List<Admin> getAllAdmins(){
        return ARepo.findAll();
    }
    public List<Trip> getAllTrips(){
       if(temp==true)
       {
           return TRepo.findAll();
       }
       return Collections.emptyList();
    }
    public List<Station> getAllStations(){
        if(temp==true)
        {
            return SRepo.findAll();
        }
        return Collections.emptyList();
    }
    public String addtrip(Trip t) {
        if(temp==true)
        {
                if((checkStation(t.getToStation())&&checkStation(t.getFromStation()))==true)
                {
                    TRepo.save(t);
                    return "Trip added successfully";
                }
                else {
                    return "no such station";
                }
        }
        return " you are not admin you can't create Trip";
    }
    public String deleteTrip(Long id){
        if(temp==true)
        {
            TRepo.deleteById(id);
            return "Trip is deleted successfully";
        }
        return "you are not admin you can't delete Trip!!";

    }
    public String updateTrip(Trip t , Long id)
    {

            if((checkStation(t.getToStation())&&checkStation(t.getFromStation()))==true)
            {
                for(Trip x : TRepo.findAll())
                {
                    if(x.getId()==id)
                    {
                        x.setName(t.getName());
                        x.setEndDate(t.getEndDate());
                        x.setFromStation(t.getFromStation());
                        x.setToStation(t.getToStation());
                        x.setStartDate(t.getStartDate());
                        TRepo.save(x);
                        return "Trip is updated successfully";
                    }
                }
            }

        return "no such Trip";
    }

    public void deleteAdmin(Long id){
        ARepo.deleteById(id);
    }
    public boolean checkStation(String s)
    {
        for(Station v : SRepo.findAll())
        {
            if(v.getName().equals(s))
            {
                return true;
            }
        }
        return false;
    }

    public String updateAdmin(Admin a , Long id)
    {

            for(Admin x : ARepo.findAll())
            {
                if(x.getId()==id)
                {
                    x.setUsername(a.getUsername());
                    x.setEmail(a.getEmail());
                    x.setPassword(a.getPassword());
                    x.setPhoneNumber(a.getPhoneNumber());
                    ARepo.save(x);
                    return "Admin is updated successfully";
                }
            }
        return "no such Admin";
        }

    }






