package com.example.profesia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import com.example.profesia.Utils.ISeedable;

@Component
public class DatabaseSeeder {
    @Autowired
    private ApplicationContext applicationContext;

    public void Seed() {
        applicationContext.getBeansOfType(ISeedable.class).values().forEach(ISeedable::Seed);
    }
}
