package com.test.app.server.businessservice.defaultcontext;
import com.test.app.shared.defaultcontext.CaseNewQuery;
import java.sql.Timestamp;
import java.util.List;

public interface CaseNewQueryBzService {

    public List<CaseNewQuery> executeQueryCaseNewQuery(Timestamp alias11, Timestamp alias22) throws Exception;
}
