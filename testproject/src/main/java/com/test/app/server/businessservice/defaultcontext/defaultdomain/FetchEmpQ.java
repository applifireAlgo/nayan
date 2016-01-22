package com.test.app.server.businessservice.defaultcontext.defaultdomain;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.spartan.shield.sessionService.SessionDataMgtService;
import com.test.app.server.businessservice.defaultcontext.CaseNewQueryBzService;
import com.test.app.server.repository.CaseSubmitionRepository;
import com.test.app.shared.defaultdomain.CaseSubmition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import com.test.app.shared.defaultcontext.defaultdomain.CaseDto;

@Component
public class FetchEmpQ {

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private CaseNewQueryBzService caseNewQueryBzService;

    @Autowired
    private CaseSubmitionRepository<CaseSubmition> caseSubmitionRepository;

    @Autowired
    private SessionDataMgtService sessionService;

    public CaseDto proFetchEmpQ() throws SpartanPersistenceException, SpartanDataNotFoundException, Exception {
        java.lang.String caseIdFromSession = (java.lang.String) sessionService.getSessionData("caseId");
        if (caseIdFromSession == null) {
            throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("Data not found in session");
        }
        com.test.app.shared.defaultdomain.CaseSubmition caseSubmition1 = caseSubmitionRepository.findById(caseIdFromSession);
        java.util.List<com.test.app.shared.defaultcontext.CaseNewQuery> caseNewQueryList3 = caseNewQueryBzService.executeQueryCaseNewQuery(caseSubmition1.getSubmitionDate(), caseSubmition1.getSubmitionDate());
        com.test.app.shared.defaultcontext.defaultdomain.CaseDto caseDto2 = new com.test.app.shared.defaultcontext.defaultdomain.CaseDto();
        caseDto2.setCaseName("");
        for (com.test.app.shared.defaultcontext.CaseNewQuery caseNewQueryList3Element1 : caseNewQueryList3) {
            caseDto2.setCaseDesc(caseNewQueryList3Element1.getCaseDesc());
            caseDto2.setCaseId(caseNewQueryList3Element1.getCaseId());
            caseDto2.setCaseName(caseNewQueryList3Element1.getCaseName());
            caseDto2.setCaseNo(caseNewQueryList3Element1.getCaseNo());
            caseDto2.setSubmitionDate(caseNewQueryList3Element1.getSubmitionDate());
            continue;
        }
        return caseDto2;
    }
}
