package com.spring.dao;

import java.sql.SQLException;

public interface StudyDao {
	public void test() throws SQLException;
	public void saveTest(String value) throws SQLException;
	
	//추가
	public void multipledb1() throws SQLException;
	public void multipledb2() throws SQLException;
}
