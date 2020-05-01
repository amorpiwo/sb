package com.rudy.wordcards.dashboard.model;

import java.math.BigInteger;
import java.time.LocalDate;

public class Card {

    private BigInteger id;
    private String word;
    private LocalDate lastViewed;

    Card() {}

    public Card(Word word) {
        this.word = word.getValue();
        this.lastViewed = word.getLastViewed();
    }

    public String getWord() {
        return word;
    }

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public LocalDate getLastViewed() {
        return lastViewed;
    }

    public void setLastViewed(LocalDate lastViewed) {
        this.lastViewed = lastViewed;
    }
}
