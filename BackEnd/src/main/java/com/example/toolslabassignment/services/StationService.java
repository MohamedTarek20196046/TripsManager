package com.example.toolslabassignment.services;


import com.example.toolslabassignment.entities.Station;

import com.example.toolslabassignment.repositories.stationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationService {


    @Autowired
    stationRepo SRepo;

    public void addStation(Station s){

        SRepo.save(s);
    }

    public Station getStation(Long id){
        return SRepo.findById(id).get();
    }

    public List<Station> getAllStations(){
        return SRepo.findAll();
    }

    public void deleteStation(Long id){
        SRepo.deleteById(id);
    }

    public String updateStation(Station s , Long id)
    {

            for(Station x : SRepo.findAll())
            {
                if(x.getId()==id)
                {
                    x.setName(s.getName());
                    SRepo.save(x);
                    return "Station is updated successfully";
                }
            }


        return "no such Station";
    }


}
