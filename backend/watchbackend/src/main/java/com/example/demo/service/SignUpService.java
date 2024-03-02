package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.SignUp;
import com.example.demo.repository.SignUpRepo;


@Service
public class SignUpService {

	@Autowired 
	SignUpRepo repo;

	public Iterable<SignUp> GetAll(){
		return repo.findAll();
	}
	
}
