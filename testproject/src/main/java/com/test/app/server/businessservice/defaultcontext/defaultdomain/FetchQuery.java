package com.test.app.server.businessservice.defaultcontext.defaultdomain;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.spartan.shield.sessionService.SessionDataMgtService;
import com.test.app.server.businessservice.defaultcontext.FetchQBzService;
import com.test.app.server.repository.EmployeeRepository;
import com.test.app.shared.defaultdomain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import com.test.app.shared.defaultcontext.FetchQ;
import java.util.List;

@Component
public class FetchQuery {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EmployeeRepository<Employee> employeeRepository;

    @Autowired
    private FetchQBzService fetchQBzService;

    public List<FetchQ> proFetchQuery() throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        java.util.List<com.test.app.shared.defaultcontext.FetchQ> fetchq_14 = null;
        try {
            java.lang.String empId = (java.lang.String) sessionService.getSessionData("empId");
            if (empId == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("Data not found in session");
            }
            if (empId == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            com.test.app.shared.defaultdomain.Employee employee_13 = employeeRepository.findById(empId);
            fetchq_14 = fetchQBzService.executeQueryFetchQ(employee_13.getEmpId());
            return fetchq_14;
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
