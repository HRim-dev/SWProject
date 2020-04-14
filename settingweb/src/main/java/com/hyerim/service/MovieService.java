package com.hyerim.service;

import java.util.List;

import com.hyerim.vo.MovieVO;

public interface MovieService {
    
    public List<MovieVO> selectMovie() throws Exception;
}
 