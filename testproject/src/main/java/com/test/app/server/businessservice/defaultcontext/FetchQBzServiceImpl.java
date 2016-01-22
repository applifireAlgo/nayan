package com.test.app.server.businessservice.defaultcontext;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import com.test.app.shared.defaultcontext.FetchQ;
import java.lang.Override;
import java.util.List;

@Component
public class FetchQBzServiceImpl implements FetchQBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<FetchQ> executeQueryFetchQ(String alias11) throws Exception {
        java.util.List<com.test.app.shared.defaultcontext.FetchQ> listDtoInterface = new java.util.ArrayList<com.test.app.shared.defaultcontext.FetchQ>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "2B33F7F9-0F7E-4B0B-82EE-11E998445AE7");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            atg.taglib.json.util.JSONObject jsonObjectAlias11 = new atg.taglib.json.util.JSONObject();
            jsonObjectAlias11.put("name", "alias1");
            jsonObjectAlias11.put("value", alias11);
            jsonObjectAlias11.put("datatype", "VARCHAR");
            jsonObjectAlias11.put("index", 1);
            jsonArray.add(jsonObjectAlias11);
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("com.test.app.shared.defaultcontext.FetchQ", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}