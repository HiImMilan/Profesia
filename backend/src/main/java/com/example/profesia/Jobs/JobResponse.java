package com.example.profesia.Jobs;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JobResponse implements Serializable {
    public List<Job> jobs;
    public int cursor;
    public int pages;

}
