package com.rudy.wordcards.dashboard.dao;

import com.rudy.wordcards.dashboard.model.Card;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.List;

public class CardDao {

    private static final Logger LOG = LogManager.getLogger(CardDao.class.getName());

    private SessionFactory sessionFactory;

    //setter is needed by Spring when configuration is done by xml (so far)
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @SuppressWarnings("unchecked")
    public List<Card> list() {
        LOG.info("Session is " + sessionFactory);
        Session session = this.sessionFactory.openSession();

        List<Card> personList = session.createQuery("from Card").list();
        LOG.info("Person list is " + personList.size());

        session.close();
        return personList;
    }



}