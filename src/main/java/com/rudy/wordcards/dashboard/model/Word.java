package com.rudy.wordcards.dashboard.model;

import java.time.LocalDate;

// this annotation allows to handle JSON that contains only on null values e.g. {"value":"word"} - without lastViewed
// seems like it is not needed, default configuration (whatever it is) handles it
//@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Word {

    private String value;
    private LocalDate lastViewed;

    public Word() {
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public LocalDate getLastViewed() {
        return lastViewed;
    }

    public void setLastViewed(LocalDate lastViewed) {
        this.lastViewed = lastViewed;
    }

    @Override
    public String toString() {
        return "Word{" +
                "value='" + value + '\'' +
                ", lastViewed=" + lastViewed +
                '}';
    }
}
