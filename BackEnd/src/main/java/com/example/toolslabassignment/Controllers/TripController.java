package com.example.toolslabassignment.Controllers;

import com.example.toolslabassignment.entities.Trip;
import com.example.toolslabassignment.services.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Trip")
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class TripController {
    @Autowired
    TripService tripservice;

    @PostMapping("/add")
    public String createTrip(@RequestBody Trip t){
       return tripservice.addtrip(t);
    }

    @GetMapping("/get/{id}")
    public Trip getTripById(@PathVariable Long id){
        return tripservice.getTrip(id);
    }

    @GetMapping("/getall")
    public List<Trip> getAllTrips(){
        return tripservice.getAlltrips();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTrip(@PathVariable Long id){
        tripservice.deleteTrip(id);
    }

}
