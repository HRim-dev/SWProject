package com.hrimDev.dao;

import java.util.List;

import com.hrimDev.vo.WineQualityVO;

public interface WineQualityDAO {
	public List<WineQualityVO> selectWineQuality() throws Exception;
	public List<WineQualityVO> selectWineQuality2() throws Exception;
}
