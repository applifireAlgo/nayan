package com.test.app.shared.defaultcontext;
import com.athena.server.bizService.DTOMapperInterface;
import java.sql.Timestamp;

public class NewCQ implements DTOMapperInterface {

    private String caseId;

    private String caseDesc;

    private String caseName;

    private Integer caseNo;

    private Timestamp submitionDate;

    public NewCQ(Object[] aryObject) {
        if (aryObject != null) {
            caseId = (java.lang.String) aryObject[0];
            caseDesc = (java.lang.String) aryObject[1];
            caseName = (java.lang.String) aryObject[2];
            caseNo = (java.lang.Integer) aryObject[3];
            submitionDate = (java.sql.Timestamp) aryObject[4];
        } else {
            caseId = null;
            caseDesc = null;
            caseName = null;
            caseNo = null;
            submitionDate = null;
        }
    }

    public String getCaseId() {
        return caseId;
    }

    public String getCaseDesc() {
        return caseDesc;
    }

    public String getCaseName() {
        return caseName;
    }

    public Integer getCaseNo() {
        return caseNo;
    }

    public Timestamp getSubmitionDate() {
        return submitionDate;
    }
}
