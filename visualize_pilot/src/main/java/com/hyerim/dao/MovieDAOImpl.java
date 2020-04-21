package com.hyerim.dao;

import java.util.List;

import javax.inject.Inject;
 
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
 
import com.hyerim.vo.MovieVO;
 
@Repository
public class MovieDAOImpl implements MovieDAO {
 
    @Inject
    private SqlSession sqlSession;
    
    private static final String Namespace = "com.hyerim.mybatis.sql.test";
    
    @Override
    public List<MovieVO> selectMovie() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectMovie");
    }
 
}