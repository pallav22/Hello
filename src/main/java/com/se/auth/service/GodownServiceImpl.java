package com.se.auth.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.se.auth.model.Godown;
import com.se.auth.repository.GodownRepository;

@Service
public class GodownServiceImpl implements GodownService {

	@Autowired
	private GodownRepository godownRepository;

	@Override
	public void save(Godown godown) {
		godownRepository.save(godown);

	}

	@Override
	public List<Godown> getAllGodown() {
		List<Godown> godown = new ArrayList<Godown>();
		godownRepository.findAll().forEach(godown::add);
		return godown;
	}

}
