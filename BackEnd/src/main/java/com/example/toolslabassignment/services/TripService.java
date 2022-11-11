package com.example.toolslabassignment.services;

import com.example.toolslabassignment.entities.Station;
import com.example.toolslabassignment.entities.Trip;
import com.example.toolslabassignment.repositories.TripRepo;
import com.example.toolslabassignment.repositories.stationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TripService {
    @Autowired
    TripRepo Repo;
    @Autowired
    stationRepo SRepo;
    public String addtrip(Trip t){
            if((checkStation(t.getToStation())&&checkStation(t.getFromStation()))==true)
            {
                Repo.save(t);
                return "Trip added successfully";
            }
        return "no such station";
    }

    public Trip getTrip(Long id){
        return Repo.findById(id).get();
    }

    public List<Trip> getAlltrips(){
        return Repo.findAll();
    }

    public void deleteTrip(Long id){
        Repo.deleteById(id);
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
}
