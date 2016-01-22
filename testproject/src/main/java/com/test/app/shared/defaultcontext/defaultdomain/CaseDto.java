package com.test.app.shared.defaultcontext.defaultdomain;
import java.sql.Timestamp;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CaseDto {

    private String caseId;

    private Integer caseNo;

    private String caseName;

    private String caseDesc;

    private Timestamp submitionDate;

    public String getCaseId() {
        return caseId;
    }

    public void setCaseId(String _caseId) {
        this.caseId = _caseId;
    }

    public Integer getCaseNo() {
        return caseNo;
    }

    public void setCaseNo(Integer _caseNo) {
        this.caseNo = _caseNo;
    }

    public String getCaseName() {
        return caseName;
    }

    public void setCaseName(String _caseName) {
        this.caseName = _caseName;
    }

    public String getCaseDesc() {
        return caseDesc;
    }

    public void setCaseDesc(String _caseDesc) {
        this.caseDesc = _caseDesc;
    }

    public Timestamp getSubmitionDate() {
        return submitionDate;
    }

    public void setSubmitionDate(Timestamp _submitionDate) {
        this.submitionDate = _submitionDate;
    }
}
