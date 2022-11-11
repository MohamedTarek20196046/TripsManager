package com.example.toolslabassignment.Controllers;

import com.example.toolslabassignment.entities.Station;
import com.example.toolslabassignment.services.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/station")
@CrossOrigin(origins = "http://localhost:4200/")
public class stationController {
    @Autowired
    StationService stationservice;

    @PostMapping("/add")
    public void createStation(@RequestBody Station s){
        stationservice.addStation(s);
    }

    @GetMapping("/get/{id}")
    public Station getStationById(@PathVariable Long id){
        return stationservice.getStation(id);
    }

    @GetMapping("/getall")
    public List<Station> getAllStations(){
        return stationservice.getAllStations();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStation(@PathVariable Long id){
        stationservice.deleteStation(id);
    }

    @PutMapping ("/Update/{id}")
    public String updateStation(@RequestBody Station s, @PathVariable Long id){
        return stationservice.updateStation(s,id);
    }

}