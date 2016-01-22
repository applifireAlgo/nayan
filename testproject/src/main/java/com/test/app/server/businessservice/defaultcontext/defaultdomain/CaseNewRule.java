package com.test.app.server.businessservice.defaultcontext.defaultdomain;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.test.app.server.businessservice.defaultcontext.NewCQBzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.test.app.shared.defaultcontext.NewCQ;
import com.test.app.shared.defaultcontext.defaultdomain.CaseNewDto;
import java.util.List;

@Component
public class CaseNewRule {

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private NewCQBzService newCQBzService;

    public List<NewCQ> proCaseNewRule(CaseNewDto caseNewDto) throws Exception {
        java.util.List<com.test.app.shared.defaultcontext.NewCQ> newCQList = newCQBzService.executeQueryNewCQ(caseNewDto.getSubmitionDate());
        return newCQList;
    }
}
