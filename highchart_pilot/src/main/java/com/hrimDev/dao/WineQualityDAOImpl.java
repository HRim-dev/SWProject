package com.hrimDev.dao;

import java.util.List;

import javax.annotation.Resource;
import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hrimDev.vo.WineQualityVO;

@Repository
public class WineQualityDAOImpl implements WineQualityDAO {
 
	@Autowired
	@Resource(name="sqlSession2")
	private SqlSession sqlSession;
    
    private static final String Namespace="com.hrimDev.mybatis.sql.mapper";
    
    @Override
    public List<WineQualityVO> selectWineQuality() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectWineQuality");
    }
    
    @Override
    public List<WineQualityVO> selectWineQuality2() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectWineQuality2");
    }
}