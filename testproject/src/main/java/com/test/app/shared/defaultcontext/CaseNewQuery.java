package com.test.app.shared.defaultcontext;
import com.athena.server.bizService.DTOMapperInterface;
import java.sql.Timestamp;

public class CaseNewQuery implements DTOMapperInterface {

    private String caseId;

    private Integer caseNo;

    private String caseName;

    private String caseDesc;

    private Timestamp submitionDate;

    private String createdBy;

    private Timestamp createdDate;

    private String updatedBy;

    private Timestamp updatedDate;

    private Integer versionId;

    private Integer activeStatus;

    private Integer txnAccessCode;

    public CaseNewQuery(Object[] aryObject) {
        if (aryObject != null) {
            caseId = (java.lang.String) aryObject[0];
            caseNo = (java.lang.Integer) aryObject[1];
            caseName = (java.lang.String) aryObject[2];
            caseDesc = (java.lang.String) aryObject[3];
            submitionDate = (java.sql.Timestamp) aryObject[4];
            createdBy = (java.lang.String) aryObject[5];
            createdDate = (java.sql.Timestamp) aryObject[6];
            updatedBy = (java.lang.String) aryObject[7];
            updatedDate = (java.sql.Timestamp) aryObject[8];
            versionId = (java.lang.Integer) aryObject[9];
            activeStatus = (java.lang.Integer) aryObject[10];
            txnAccessCode = (java.lang.Integer) aryObject[11];
        } else {
            caseId = null;
            caseNo = null;
            caseName = null;
            caseDesc = null;
            submitionDate = null;
            createdBy = null;
            createdDate = null;
            updatedBy = null;
            updatedDate = null;
            versionId = null;
            activeStatus = null;
            txnAccessCode = null;
        }
    }

    public String getCaseId() {
        return caseId;
    }

    public Integer getCaseNo() {
        return caseNo;
    }

    public String getCaseName() {
        return caseName;
    }

    public String getCaseDesc() {
        return caseDesc;
    }

    public Timestamp getSubmitionDate() {
        return submitionDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public Timestamp getUpdatedDate() {
        return updatedDate;
    }

    public Integer getVersionId() {
        return versionId;
    }

    public Integer getActiveStatus() {
        return activeStatus;
    }

    public Integer getTxnAccessCode() {
        return txnAccessCode;
    }
}
