package com.test.app.server.businessservice.defaultcontext.defaultdomain;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.spartan.shield.sessionService.SessionDataMgtService;
import com.test.app.server.repository.CaseSubmitionRepository;
import com.test.app.shared.defaultdomain.CaseSubmition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;

@Component
public class StoreDate {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private CaseSubmitionRepository<CaseSubmition> caseSubmitionRepository;

    public void proStoreDate(CaseSubmition entity) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        try {
            if (entity == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            com.test.app.shared.defaultdomain.CaseSubmition casesubmition_0 = caseSubmitionRepository.save(entity);
            sessionService.setSessionAttributeForDateTime("submitionDate", casesubmition_0.getSubmitionDate());
            sessionService.setSessionAttributeForString("caseId", casesubmition_0.getCaseId());
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
