package com.hellokoding.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hellokoding.auth.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
