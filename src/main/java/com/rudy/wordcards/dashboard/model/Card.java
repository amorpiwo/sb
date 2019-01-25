package com.rudy.wordcards.dashboard.model;

import java.math.BigInteger;

public class Card {

    private BigInteger id;
    private String word;

    Card() {}

    public Card(String word) {
        this.word = word;
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
}
