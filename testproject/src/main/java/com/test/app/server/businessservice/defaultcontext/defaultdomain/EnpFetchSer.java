package com.test.app.server.businessservice.defaultcontext.defaultdomain;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.spartan.shield.sessionService.SessionDataMgtService;
import com.test.app.server.businessservice.defaultcontext.FetchQBzService;
import com.test.app.server.repository.EmployeeRepository;
import com.test.app.shared.defaultdomain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import com.test.app.shared.defaultcontext.defaultdomain.EmpDto;

@Component
public class EnpFetchSer {

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EmployeeRepository<Employee> employeeRepository;

    @Autowired
    private FetchQBzService fetchQBzService;

    @Autowired
    private SessionDataMgtService sessionService;

    public EmpDto proEnpFetchSer() throws SpartanPersistenceException, SpartanDataNotFoundException, Exception {
        java.lang.String empIdFromSession = (java.lang.String) sessionService.getSessionData("empId");
        if (empIdFromSession == null) {
            throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("Data not found in session");
        }
        com.test.app.shared.defaultdomain.Employee employee = employeeRepository.findById(empIdFromSession);
        java.util.List<com.test.app.shared.defaultcontext.FetchQ> fetchQList = fetchQBzService.executeQueryFetchQ(employee.getEmpId());
        com.test.app.shared.defaultcontext.defaultdomain.EmpDto empDto = new com.test.app.shared.defaultcontext.defaultdomain.EmpDto();
        empDto.setFirstName("");
        for (com.test.app.shared.defaultcontext.FetchQ fetchQListElement : fetchQList) {
            empDto.setEmpId(fetchQListElement.getEmpId());
            empDto.setFirstName(fetchQListElement.getFirstName());
            break;
        }
        return empDto;
    }
}
