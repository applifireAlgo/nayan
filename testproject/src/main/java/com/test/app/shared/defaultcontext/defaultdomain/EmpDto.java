package com.test.app.shared.defaultcontext.defaultdomain;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class EmpDto {

    private String empId;

    private String firstName;

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String _empId) {
        this.empId = _empId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String _firstName) {
        this.firstName = _firstName;
    }
}
