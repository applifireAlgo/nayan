package com.test.app.shared.defaultcontext;
import com.athena.server.bizService.DTOMapperInterface;

public class FetchQ implements DTOMapperInterface {

    private String empId;

    private String firstName;

    public FetchQ(Object[] aryObject) {
        if (aryObject != null) {
            empId = (java.lang.String) aryObject[0];
            firstName = (java.lang.String) aryObject[1];
        } else {
            empId = null;
            firstName = null;
        }
    }

    public String getEmpId() {
        return empId;
    }

    public String getFirstName() {
        return firstName;
    }
}
