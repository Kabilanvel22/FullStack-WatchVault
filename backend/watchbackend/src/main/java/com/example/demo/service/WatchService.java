package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Watch;
import com.example.demo.repository.WatchRepo;

@Service
public class WatchService {

	@Autowired
	WatchRepo watchRepository;
		public Page<Watch> SortingAndPaging(int page,int size,String field){
			Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
			return watchRepository.findAll(paging);
		}
		public Page<Watch> Paging(int CurrentPage,int itemsPerPage){
			Pageable paging=PageRequest.of(CurrentPage,itemsPerPage);
			return watchRepository.findAll(paging);
		}
	
}
