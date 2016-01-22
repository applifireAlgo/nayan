package com.test.app.server.businessservice.defaultcontext;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import com.test.app.shared.defaultcontext.NewCQ;
import java.lang.Override;
import java.sql.Timestamp;
import java.util.List;

@Component
public class NewCQBzServiceImpl implements NewCQBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<NewCQ> executeQueryNewCQ(Timestamp alias11) throws Exception {
        java.util.List<com.test.app.shared.defaultcontext.NewCQ> listDtoInterface = new java.util.ArrayList<com.test.app.shared.defaultcontext.NewCQ>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "C22C4BF3-D591-44C6-8C41-C6F738F2C45B");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            atg.taglib.json.util.JSONObject jsonObjectAlias11 = new atg.taglib.json.util.JSONObject();
            jsonObjectAlias11.put("name", "alias1");
            jsonObjectAlias11.put("value", alias11);
            jsonObjectAlias11.put("datatype", "DATETIME");
            jsonObjectAlias11.put("index", 1);
            jsonArray.add(jsonObjectAlias11);
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("com.test.app.shared.defaultcontext.NewCQ", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}
