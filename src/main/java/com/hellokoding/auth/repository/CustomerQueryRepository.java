package com.hellokoding.auth.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.hellokoding.auth.model.Customer;


public interface CustomerQueryRepository extends Repository<Customer, Long> {
	
	
	// Query will be used from Named query defined at Entity class
	List<Customer> findByMobile(String mobile);
		
//	@Query(value = "select * from #{#entityName} b where b.name=?1", nativeQuery = true)
//	List<Customer> findByMobile(int mobile);

	/*@Query(value = "select name,author,price from Customer b where b.price>?1 and b.price<?2")
	List<Customer> findByPriceRange(long price1, long price2);

	@Query(value = "select name,author,price from Customer b where b.name like %:name%")
	List<Customer> findByNameMatch(@Param("name") String name);

	@Query(value = "select name,author,price from Customer b where b.name = :name AND b.author=:author AND b.price=:price")
	List<Customer> findByNamedParam(@Param("name") String name, @Param("author") String author,
			@Param("price") long price);*/

}
