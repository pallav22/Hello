package com.se.auth.service;

import java.util.List;

import com.se.auth.model.Godown;

public interface GodownService {
	void save(Godown godown);

	public List<Godown> getAllGodown();

}
