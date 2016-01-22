package com.test.app.server.businessservice.defaultcontext;
import com.test.app.shared.defaultcontext.FetchQ;
import java.util.List;

public interface FetchQBzService {

    public List<FetchQ> executeQueryFetchQ(String alias11) throws Exception;
}
