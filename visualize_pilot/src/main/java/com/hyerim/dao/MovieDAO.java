package com.hyerim.dao;

import java.util.List;

import com.hyerim.vo.MovieVO;
 
public interface MovieDAO {
    
    public List<MovieVO> selectMovie() throws Exception;
}