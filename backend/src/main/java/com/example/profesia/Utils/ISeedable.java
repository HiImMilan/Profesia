package com.example.profesia.Utils;

public abstract class ISeedable {
    public ISeedable Seed() {
        return this;
    };

    private int numberOfEntities = 1;

    public ISeedable setNumberOfEntities(int numberOfEntities) {
        this.numberOfEntities = numberOfEntities;
        return this;
    };

    public int getNumberOfEntities() {
        return this.numberOfEntities;
    };
};
