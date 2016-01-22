package com.test.app.server.businessservice.defaultcontext;
import com.test.app.shared.defaultcontext.NewCQ;
import java.sql.Timestamp;
import java.util.List;

public interface NewCQBzService {

    public List<NewCQ> executeQueryNewCQ(Timestamp alias11) throws Exception;
}
