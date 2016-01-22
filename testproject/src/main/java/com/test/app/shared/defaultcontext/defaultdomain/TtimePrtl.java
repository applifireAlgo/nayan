package com.test.app.shared.defaultcontext.defaultdomain;
import java.sql.Timestamp;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TtimePrtl {

    private Timestamp tdate;

    @Min(0)
    @Max(65535)
    private String ttime;

    @Min(0)
    @Max(65535)
    private String tName;

    public Timestamp getTdate() {
        return tdate;
    }

    public void setTdate(Timestamp _tdate) {
        this.tdate = _tdate;
    }

    public String getTtime() {
        return ttime;
    }

    public void setTtime(String _ttime) {
        this.ttime = _ttime;
    }

    public String gettName() {
        return tName;
    }

    public void settName(String _tName) {
        this.tName = _tName;
    }
}
