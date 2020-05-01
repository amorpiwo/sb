package com.rudy.wordcards.dashboard.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import java.time.LocalDate;

public class Test {

    private String uid;
    private String text;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate date;

    public Test() {
    }

    //when JSON object is only text, so not really an JSON
    //this constructor will be used to deserialize
    // e.g PUT body is: "1231231" - will work
    //                   {"123123123"} - won't work, wrong JSON
    //                   {"uid":"23123123"} - won't work until there is setter for UID
    //                                         won't use this constructor in that case
    public Test(String uid) {
        this.uid = uid;
    }

    // looks like there can be only one creator, however there was a way to add more
    // provided that first parameter of constructor has different type ? to check

//    @JsonCreator
//    public Test(@JsonProperty("text") String text, @JsonProperty("date") LocalDate date) {
//        this.text = text;
//        this.date = date;
//    }

    public void setText(String text) {
        this.text = text;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Test{" +
                "uid='" + uid + '\'' +
                ", text='" + text + '\'' +
                ", date=" + date +
                '}';
    }
}
