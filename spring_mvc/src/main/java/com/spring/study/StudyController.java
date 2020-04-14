package com.spring.study;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spring.service.StudyService;

@Controller
@RequestMapping(value = "/", method = RequestMethod.GET)
public class StudyController {
	
	
//	private StudyDao studyDao;
	@Autowired
	private StudyService studyService;
/*
	@GetMapping("/test")
	public void test() {
		try {
			studyDao.test();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	*/
	@GetMapping("/saveTest")
	public void saveTest(){
	    try {
	        studyService.insertTest();   
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	}
	@RequestMapping("/multipledb")
	public void multipledb(){
	    try {
	        studyService.multipledb();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}
}
