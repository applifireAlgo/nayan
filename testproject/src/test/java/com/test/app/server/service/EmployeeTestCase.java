package com.test.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.test.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.test.app.server.repository.EmployeeRepository;
import com.test.app.shared.defaultdomain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import com.test.app.shared.contacts.CoreContacts;
import com.test.app.server.repository.CoreContactsRepository;
import com.test.app.shared.contacts.Gender;
import com.test.app.server.repository.GenderRepository;
import com.test.app.shared.location.Language;
import com.test.app.server.repository.LanguageRepository;
import com.test.app.shared.location.Timezone;
import com.test.app.server.repository.TimezoneRepository;
import com.test.app.shared.contacts.Title;
import com.test.app.server.repository.TitleRepository;
import com.test.app.shared.defaultdomain.Dept;
import com.test.app.server.repository.DeptRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class EmployeeTestCase {

    @Autowired
    private EmployeeRepository<Employee> employeeRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(73);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("ogZkaHZIwwz4tLZhtO5M377Zk6iNxRnYLnVo1VthNIxbx7Lel7");
            corecontacts.setFirstName("eueurjDsgQbI5KgQ5lBnN1Cx8PhKnrSDPFAmWBaHPYhLFXDU74");
            Gender gender = new Gender();
            gender.setGender("8K9YV2agYzybIhACw7LuoFFYvR9b3AoKclzSwuSJ6SDz8FFvqe");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("Yy");
            language.setAlpha3("HKo");
            language.setAlpha4("0JbG");
            language.setAlpha4parentid(3);
            language.setLanguage("Kx2r18UwgTwwBi6aVMBOmmWK0UMiZyXSZxpwHbM3RmB45JXBGd");
            language.setLanguageDescription("I0EqsHNk7qS7Zh3PgKsrbCSAsjCP55tb9ixTUQfLyEywg9ENXS");
            language.setLanguageIcon("yqFU7556W4I0lMHhp1bTtRVtnSwwV3gyxlWlheTeO3ZmSFYQm3");
            language.setLanguageType("20uVoJUT1U5IpjiKRL8EL19PXxHi16RD");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("L6xiierIWCjPMUVHAnaL9AWptxEkKwsfnDloumVZfNcDtHCBoa");
            timezone.setCountry("o2NHlWXrMS6zKhBUmfSA7fP5abUGqislhHuoWDhrfWgPcjfj14");
            timezone.setGmtLabel("t3UVb5Spkn17VRAju6sssrZp4xSh2ZtA26dOZ7R8dFMebO2SVJ");
            timezone.setTimeZoneLabel("PeLBv1ghOcLesGmqNW63ZPaqxLiS2Xfx9pVcoBvelFmPexVG7Y");
            timezone.setUtcdifference(0);
            Title title = new Title();
            title.setTitles("Mj3PJwG0IlSy1iSOez4dfimUy1q6InIMPh8fSTP0nQwSfp9aXf");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(85);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("ccpAYgDvUmTf00fzg64Gho1JHe1xGoFxt0HxGStFpjHPQJQehm");
            corecontacts.setFirstName("n8yfGiIyj8FpzvEFK9O4RKFBcdnleL2vYX0DCFKjYzaDnDilDa");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("DJKhwLo4EKmb3x3k9LLDEFloPmX4vypDiqrpln9LjNMKcZpaoO");
            corecontacts.setMiddleName("JeyObCrUlK1K3GQ98vJYuDekKXKBrWZsfznaC09Z3zXdiYbCYx");
            corecontacts.setNativeFirstName("ogRxj8bKsn11LHHGP0pEkdP2wHvYq1OjSe7p3euA6okr0lgL7M");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("9nqkcjHbID2t3H9n0KVZqevQQ5ncaMOPKYoogQdarbweyfhzVa");
            corecontacts.setNativeMiddleName("hTSp7IWMRoMFOfLhiOcPsAEk7IslBvavxZYVcwZOEa8EKxGYAX");
            corecontacts.setNativeTitle("7ZqLr4Gy0wPZLx2mTIclHzOVIWSrqprJ6rUxOk0otQH9GUqxNV");
            corecontacts.setPhoneNumber("KBbCKdwSocm4oZS4MVk4");
            timezone.setTimeZoneId(null);
            corecontacts.setTimezone(timezoneRepository.save(timezone));
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            CoreContacts CoreContactsTest = corecontactsRepository.save(corecontacts);
            map.put("CoreContactsPrimaryKey", corecontacts._getPrimarykey());
            Dept dept = new Dept();
            dept.setDept("6EkJ51IaSgde1W8x1vdd1gyboqdPYzVIReR8OE1jkmQY82dY0t");
            dept.setDeptno(2147483647);
            Dept DeptTest = deptRepository.save(dept);
            map.put("DeptPrimaryKey", dept._getPrimarykey());
            Employee employee = new Employee();
            employee.setContactId((java.lang.String) CoreContactsTest._getPrimarykey()); /* ******Adding refrenced table data */
            employee.setDept((java.lang.String) DeptTest._getPrimarykey());
            employee.setDesignation("s4qKzPOJRo7WReGO28Vf0Mc8RjxtjBkC0LSs1z249ClC8fvv6d");
            employee.setJobType("asWnx9EKrneS20RMq9NTG0oCcPokVy9rcPh92JuAmh6PICJZKm");
            employee.setPan("8FFqGTmJey9WpNFTity1JmrXpkp4UN4jNonz7pGekiZegFnps4");
            employee.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            employee.setEntityValidator(entityValidator);
            employee.isValid();
            employeeRepository.save(employee);
            map.put("EmployeePrimaryKey", employee._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private DeptRepository<Dept> deptRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("EmployeePrimaryKey"));
            Employee employee = employeeRepository.findById((java.lang.String) map.get("EmployeePrimaryKey"));
            employee.setDesignation("V3voSnYnkjKU2S2FMEVg8WwEEDDjj1a8GwOslERudv6uhlC6fw");
            employee.setJobType("cgktEkrDU416tv0hVgUQt8nPGTk7rwX2D6zhq8WGSRHf343v8O");
            employee.setPan("LclOT4Kr1qb97f0l3vzGyXREgGjMQGGZVA20VTeqOXOqNeljsE");
            employee.setVersionId(1);
            employee.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            employeeRepository.update(employee);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycontactId() {
        try {
            java.util.List<Employee> listofcontactId = employeeRepository.findByContactId((java.lang.String) map.get("CoreContactsPrimaryKey"));
            if (listofcontactId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBydept() {
        try {
            java.util.List<Employee> listofdept = employeeRepository.findByDept((java.lang.String) map.get("DeptPrimaryKey"));
            if (listofdept.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("EmployeePrimaryKey"));
            employeeRepository.findById((java.lang.String) map.get("EmployeePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("EmployeePrimaryKey"));
            employeeRepository.delete((java.lang.String) map.get("EmployeePrimaryKey")); /* Deleting refrenced data */
            deptRepository.delete((java.lang.String) map.get("DeptPrimaryKey")); /* Deleting refrenced data */
            corecontactsRepository.delete((java.lang.String) map.get("CoreContactsPrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
