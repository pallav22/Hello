package com.se.auth.service;

import com.se.auth.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
