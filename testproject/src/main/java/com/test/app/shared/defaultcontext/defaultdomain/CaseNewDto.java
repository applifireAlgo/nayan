package com.test.app.shared.defaultcontext.defaultdomain;
import java.sql.Timestamp;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CaseNewDto {

    private Timestamp submitionDate;

    public Timestamp getSubmitionDate() {
        return submitionDate;
    }

    public void setSubmitionDate(Timestamp _submitionDate) {
        this.submitionDate = _submitionDate;
    }
}
