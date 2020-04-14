package com.spring.dao;

import java.sql.SQLException;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StudyDaoImpl implements StudyDao{

	@Autowired
	@Resource(name="sqlSession")
	private SqlSession query;
	
	@Autowired
	@Resource(name="sqlSession2")
	private SqlSession query2;
	
	//private static final String Namespace = "com.spring.mybatis.sql.test";
	
	@Override
	public void test() throws SQLException {
		// TODO Auto-generated method stub
		query.selectOne("query.test");
	}

	@Override
	public void saveTest(String value) throws SQLException {
		// TODO Auto-generated method stub
		query.insert("query.saveTest",value);
		
	}

	@Override
	public void multipledb1() throws SQLException {
		// TODO Auto-generated method stub
		int count= query.selectOne("query.multipledb1");
		System.out.println("Theater.mybatis_table COUNT 결과:"+count);
	}

	@Override
	public void multipledb2() throws SQLException {
	    int count = query2.selectOne("query.multipledb2");
	    System.out.println("test.grid_table COUNT 결과:"+count);
	}
	
	
}
