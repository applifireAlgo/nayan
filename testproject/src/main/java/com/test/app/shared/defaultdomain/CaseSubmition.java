package com.test.app.shared.defaultdomain;
import com.athena.annotation.Complexity;
import com.athena.annotation.SourceCodeAuthorClass;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.eclipse.persistence.annotations.Cache;
import org.eclipse.persistence.annotations.CacheType;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import com.athena.config.jsonHandler.CustomJsonTimestampSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.athena.config.jsonHandler.CustomJsonTimestampDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Version;
import com.test.app.shared.EntityAudit;
import javax.persistence.Embedded;
import com.test.app.shared.SystemInfo;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import java.lang.Override;
import javax.persistence.NamedQueries;

@Table(name = "ast_CaseSubmition_T")
@Entity
@Cache(type = CacheType.CACHE)
@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "2", comments = "CaseSubmition", complexity = Complexity.LOW)
@NamedQueries({ @javax.persistence.NamedQuery(name = "CaseSubmition.findById", query = "select e from CaseSubmition e where e.systemInfo.activeStatus=1 and e.caseId =:caseId"), @javax.persistence.NamedQuery(name = "CaseQ", query = "SELECT caseSubmition FROM CaseSubmition AS caseSubmition WHERE caseSubmition.submitionDate >= :submitionDate AND caseSubmition.submitionDate <= :submitionDate1 ") })
public class CaseSubmition implements Serializable, CommonEntityInterface, Comparator<CaseSubmition> {

    @Column(name = "caseNo")
    @JsonProperty("caseNo")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer caseNo;

    @Column(name = "caseName")
    @JsonProperty("caseName")
    @NotNull
    @Size(min = 0, max = 256)
    private String caseName;

    @Column(name = "caseDesc")
    @JsonProperty("caseDesc")
    @NotNull
    private String caseDesc;

    @Column(name = "submitionDate")
    @JsonProperty("submitionDate")
    @NotNull
    @JsonSerialize(using = CustomJsonTimestampSerializer.class)
    @JsonDeserialize(using = CustomJsonTimestampDeserializer.class)
    private Timestamp submitionDate;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "caseId")
    @JsonProperty("caseId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String caseId;

    @Transient
    @JsonIgnore
    private EntityValidatorHelper<Object> entityValidator;

    @Version
    @Column(name = "versionId")
    @JsonProperty("versionId")
    private int versionId;

    @Embedded
    @JsonIgnore
    private EntityAudit entityAudit = new EntityAudit();

    @Embedded
    private SystemInfo systemInfo = new SystemInfo();

    @Transient
    private String primaryDisplay;

    public Integer getCaseNo() {
        return caseNo;
    }

    public void setCaseNo(Integer _caseNo) {
        if (_caseNo != null) {
            this.caseNo = _caseNo;
        }
    }

    public String getCaseName() {
        return caseName;
    }

    public void setCaseName(String _caseName) {
        if (_caseName != null) {
            this.caseName = _caseName;
        }
    }

    public String getCaseDesc() {
        return caseDesc;
    }

    public void setCaseDesc(String _caseDesc) {
        if (_caseDesc != null) {
            this.caseDesc = _caseDesc;
        }
    }

    public Timestamp getSubmitionDate() {
        return submitionDate;
    }

    public void setSubmitionDate(Timestamp _submitionDate) {
        if (_submitionDate != null) {
            this.submitionDate = _submitionDate;
        }
    }

    public String getPrimaryKey() {
        return caseId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return caseId;
    }

    public String getCaseId() {
        return caseId;
    }

    public void setCaseId(String _caseId) {
        this.caseId = _caseId;
    }

    public int getVersionId() {
        return versionId;
    }

    public void setVersionId(int _versionId) {
        this.versionId = _versionId;
    }

    public void setPrimaryDisplay(String _primaryDisplay) {
        this.primaryDisplay = _primaryDisplay;
    }

    public SystemInfo getSystemInfo() {
        return systemInfo;
    }

    public void setSystemInfo(SystemInfo _systemInfo) {
        this.systemInfo = _systemInfo;
    }

    @JsonIgnore
    public boolean isHardDelete() {
        if (this.systemInfo == null) {
            this.systemInfo = new SystemInfo();
        }
        if (this.systemInfo.getActiveStatus() == -1) {
            return true;
        } else {
            return false;
        }
    }

    @JsonIgnore
    @Override
    public boolean isValid() throws SpartanConstraintViolationException, SpartanIncorrectDataException {
        boolean isValid = false;
        if (this.entityValidator != null) {
            isValid = this.entityValidator.validateEntity(this);
        } else {
            throw new SpartanIncorrectDataException("Entity validator is not set");
        }
        return isValid;
    }

    @Override
    public void setEntityValidator(EntityValidatorHelper<Object> _validateFactory) {
        this.entityValidator = _validateFactory;
    }

    @Override
    public void setEntityAudit(int customerId, String userId, RECORD_TYPE recordType) {
        System.out.println("Setting logged in user info for " + recordType);
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (recordType == RECORD_TYPE.ADD) {
            this.entityAudit.setCreatedBy(userId);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
        setSystemInformation(recordType);
    }

    @Override
    public void setEntityAudit(int customerId, String userId) {
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (getPrimaryKey() == null) {
            this.entityAudit.setCreatedBy(userId);
            this.systemInfo.setActiveStatus(1);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
    }

    @JsonIgnore
    public String getLoggedInUserInfo() {
        String auditInfo = "";
        if (this.entityAudit != null) {
            auditInfo = entityAudit.toString();
        }
        return auditInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemInformation(RECORD_TYPE recordType) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        if (recordType == RECORD_TYPE.DELETE) {
            this.systemInfo.setActiveStatus(0);
        } else {
            this.systemInfo.setActiveStatus(1);
        }
    }

    @JsonIgnore
    public void setSystemInformation(Integer activeStatus) {
        this.systemInfo.setActiveStatus(activeStatus);
    }

    @JsonIgnore
    public String getSystemInformation() {
        String systemInfo = "";
        if (this.systemInfo != null) {
            systemInfo = systemInfo.toString();
        }
        return systemInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemTxnCode(Integer transactionAccessCode) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        this.systemInfo.setTxnAccessCode(transactionAccessCode);
    }

    @Override
    public int compare(CaseSubmition object1, CaseSubmition object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((caseNo == null ? " " : caseNo) + ",");
        sb.append((caseName == null ? " " : caseName));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (caseId == null) {
            return super.hashCode();
        } else {
            return caseId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.test.app.shared.defaultdomain.CaseSubmition other = (com.test.app.shared.defaultdomain.CaseSubmition) obj;
            if (caseId == null) {
                return false;
            } else if (!caseId.equals(other.caseId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
