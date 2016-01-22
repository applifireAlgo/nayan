package com.test.app.server.service.defaultcontext.defaultdomain.service;
import com.athena.framework.server.bean.ResponseBean;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import com.test.app.server.businessservice.defaultcontext.defaultdomain.FetchQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS)
@RequestMapping("/FetchQueryWS")
public class FetchQueryWS {

    @Autowired
    private FetchQuery fetchquery;

    @RequestMapping(value = "/proFetchQuery", consumes = "application/json", method = RequestMethod.POST)
    public HttpEntity<ResponseBean> proFetchQuery() throws Exception, SpartanBusinessValidationFailedException, SpartanDataNotFoundException, SpartanIncorrectDataException, SpartanPersistenceException {
        com.athena.framework.server.bean.ResponseBean responseBean = new com.athena.framework.server.bean.ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.CREATED;
        java.util.List<com.test.app.shared.defaultcontext.FetchQ> _ruleOutput = fetchquery.proFetchQuery();
        responseBean.add("success", true);
        responseBean.add("message", "Successfully executed ");
        responseBean.add("data", _ruleOutput);
        return new org.springframework.http.ResponseEntity<com.athena.framework.server.bean.ResponseBean>(responseBean, httpStatus);
    }
}
