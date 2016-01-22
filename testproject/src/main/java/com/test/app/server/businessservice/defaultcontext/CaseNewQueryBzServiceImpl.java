package com.test.app.server.businessservice.defaultcontext;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import com.test.app.shared.defaultcontext.CaseNewQuery;
import java.lang.Override;
import java.sql.Timestamp;
import java.util.List;

@Component
public class CaseNewQueryBzServiceImpl implements CaseNewQueryBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<CaseNewQuery> executeQueryCaseNewQuery(Timestamp alias11, Timestamp alias22) throws Exception {
        java.util.List<com.test.app.shared.defaultcontext.CaseNewQuery> listDtoInterface = new java.util.ArrayList<com.test.app.shared.defaultcontext.CaseNewQuery>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "DADCA4ED-618C-43E0-9617-61809B92F319");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            atg.taglib.json.util.JSONObject jsonObjectAlias11 = new atg.taglib.json.util.JSONObject();
            jsonObjectAlias11.put("name", "alias1");
            jsonObjectAlias11.put("value", alias11);
            jsonObjectAlias11.put("datatype", "DATETIME");
            jsonObjectAlias11.put("index", 1);
            jsonArray.add(jsonObjectAlias11);
            atg.taglib.json.util.JSONObject jsonObjectAlias22 = new atg.taglib.json.util.JSONObject();
            jsonObjectAlias22.put("name", "alias2");
            jsonObjectAlias22.put("value", alias22);
            jsonObjectAlias22.put("datatype", "DATETIME");
            jsonObjectAlias22.put("index", 2);
            jsonArray.add(jsonObjectAlias22);
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("com.test.app.shared.defaultcontext.CaseNewQuery", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}
