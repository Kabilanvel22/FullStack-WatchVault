package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.xml.crypto.Data;

import org.hibernate.grammars.hql.HqlParser.SortDirectionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Watch;
import com.example.demo.repository.WatchRepo;


@CrossOrigin("*")
@RestController
@RequestMapping("/watchs")
public class WatchController {

    @Autowired
    private WatchRepo watchRepository;
    @GetMapping(value="/get")
    public List<Watch> getAllWatchs(){
        return watchRepository.findAll();
    }
    @GetMapping(value="/{currentPage}/{itemsPerPage}/{sortBy}/{sortOrder}")
    public Page<Watch> getData(@PathVariable(value="currentPage") int page,
                                              @PathVariable(value= "itemsPerPage") int size,
                                              @PathVariable(value= "sortBy") String field,
                                              @PathVariable(value= "sortOrder") String direction) {
    	Pageable paging;
   if(direction.equals("asc")) {
   paging=PageRequest.of(page-1, size).withSort(Sort.by(field));
   }
   else {
	   paging=PageRequest.of(page-1, size).withSort(Sort.by(field).descending());       
   }
  return  watchRepository.findAll(paging);
    }	
    @PostMapping
    public Watch createWatch(@RequestBody Watch watch) {
        return watchRepository.save(watch);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Watch>> getWatchById(@PathVariable  int id){
        Optional<Watch> watch = watchRepository.findById(id);
        return ResponseEntity.ok(watch);
    }

    @PutMapping("{id}")
	public Watch updateBookDetails(@RequestBody Watch b)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		return watchRepository.save(b);		
	}
    @DeleteMapping("{id}")
	public String deleteDetails(@PathVariable int id)
	{
		watchRepository.deleteById(id);
		return "Id : "+id+" is deleted";
	}
    @DeleteMapping
    public String deleteAllDetails()
    {
    	watchRepository.deleteAll();
    	return "All Watchs deleted";
    }
}
