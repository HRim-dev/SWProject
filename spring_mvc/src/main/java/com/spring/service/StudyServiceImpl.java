package com.spring.service;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.dao.StudyDao;

@Service
public class StudyServiceImpl implements StudyService{
	@Autowired
    private StudyDao dao;
 
    @Override
    public void insertTest() throws SQLException {
        dao.saveTest("글등록테스트1");
       // dao.saveTest(null);
    }

	@Override
	public void multipledb() throws SQLException {
		// TODO Auto-generated method stub
		dao.multipledb1();
		dao.multipledb2();
	}

}
