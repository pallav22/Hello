package com.hellokoding.auth.service;

import java.util.List;

import com.hellokoding.auth.model.Godown;

public interface GodownService {
	void save(Godown godown);

	public List<Godown> getAllGodown();

}
