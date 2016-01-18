package project4.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import project4.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import project4.app.server.repository.LoginRepository;
import project4.app.shared.authentication.Login;
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
import project4.app.shared.contacts.CoreContacts;
import project4.app.server.repository.CoreContactsRepository;
import project4.app.shared.contacts.Gender;
import project4.app.server.repository.GenderRepository;
import project4.app.shared.location.Language;
import project4.app.server.repository.LanguageRepository;
import project4.app.shared.location.Timezone;
import project4.app.server.repository.TimezoneRepository;
import project4.app.shared.contacts.Title;
import project4.app.server.repository.TitleRepository;
import project4.app.shared.authentication.User;
import project4.app.server.repository.UserRepository;
import project4.app.shared.authentication.UserAccessDomain;
import project4.app.server.repository.UserAccessDomainRepository;
import project4.app.shared.authentication.UserAccessLevel;
import project4.app.server.repository.UserAccessLevelRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class LoginTestCase {

    @Autowired
    private LoginRepository<Login> loginRepository;

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
            corecontacts.setAge(61);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("9R1qjFPGV71MZcK3nmKjCs81dYG8vuediJEBfOa5RU1bRWel3W");
            corecontacts.setFirstName("ijYZETYtIbAYNbqO2pHagEmwTwM9Ky4VXEsSl7APRM8M05ZvfQ");
            Gender gender = new Gender();
            gender.setGender("zN3TrUTXlZcKYjNJpoqv4ufFJ5xKFE9w5C3mvLCDQn2nObSWjP");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("al");
            language.setAlpha3("gZ3");
            language.setAlpha4("DcaJ");
            language.setAlpha4parentid(5);
            language.setLanguage("x4ZxQbM8amo9EjF6g3zDRYEtnFsSSCUD1evCV73mnVlOW1BfJ6");
            language.setLanguageDescription("MItZ3ewdmXKuac0oOTZ5gdCjGJzw7SUvx3ARnk2cQJy6rKXHIQ");
            language.setLanguageIcon("eE5fnbY244R1Lgn6dDRCpLxUVicHeV9bTO3MeAFELbeEqmxi5L");
            language.setLanguageType("UKfLYyo07ODyTRUD6tBacIVQO8dl3Mnp");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("bRfhjHAes8enRgy7tgUlOqtRMkcpsC9QwogjRzV8vNlhRnGm7F");
            timezone.setCountry("ubb5oREUfPHziWEt8StfGic4CEHXoqGxdMzNKT1pbz6w5upYEK");
            timezone.setGmtLabel("EuE7Ch6ZqHll6ZjpWWzZedkuEJV43gYIsoffBOWrN42GTHYSwq");
            timezone.setTimeZoneLabel("jIl9fj7smVCyeDB1CceK6C3cb37wJuQdvnQ6D01JyzExFayt4H");
            timezone.setUtcdifference(3);
            Title title = new Title();
            title.setTitles("cLuAOAHIuGmoEJmQJmoO5bKQXWAPqhh6FGzxgqCYq74wyTQB8e");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(88);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("4YBM3z3yQgFRGnSPLm6R1kxVUhiNo7wFhZ8wN60qid6xZBqyN4");
            corecontacts.setFirstName("fZL6qfhiX77EcAl4igy3vJ7HpzyrfdVlqe20fH3Go3KqYebh5U");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("tCnNggSuPufQzH5fXjKMn7AOYK0jsRyUHXRYZK09xdMMDjh82B");
            corecontacts.setMiddleName("AceB1GVeFQ7iuhOgly13M1yjnQjSJtD0SLgNmgXokGhuFv17qS");
            corecontacts.setNativeFirstName("hgMG53PUXidaKO3OEvFGnbZ800pJi5cdHbLJtCbR95eBUn39q5");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("8wohnVUwx9s2Kl410eQejqkR5lRuT6WZAkUA8rGnSKKrqwZlXT");
            corecontacts.setNativeMiddleName("DdjRzA3F01dn1MYoloTQdhKz3wIeLJWheqZgRf6Xx7cDWzMD9c");
            corecontacts.setNativeTitle("0Qm4QiKR70dGGGDGJ1bIWd0XDnMobryI7J088AfZeZThRcDpaR");
            corecontacts.setPhoneNumber("UTjFsZne5rORPCZvDPJu");
            timezone.setTimeZoneId(null);
            corecontacts.setTimezone(timezoneRepository.save(timezone));
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            User user = new User();
            user.setAllowMultipleLogin(0);
            user.setChangePasswordNextLogin(1);
            user.setGenTempOneTimePassword(1);
            user.setIsDeleted(1);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(1);
            user.setPasswordAlgo("pfOXpSnUQxmkHB9CSCZlE8Zn47cdK2Sg4LNFSpraQ1tPTNZY7x");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(44);
            user.setUserAccessCode(7);
            UserAccessDomain useraccessdomain = new UserAccessDomain();
            useraccessdomain.setDomainDescription("vknTr2nVcaqmwOyopH1xNp6PL9wN0lMgGCg4jESWqyx1PNrhRQ");
            useraccessdomain.setDomainHelp("x2NhILI61mR5yzfPspMbmks8sQJ1w9xVCAb0FAgHBvpQ43Yylj");
            useraccessdomain.setDomainIcon("lWrvn9sYQo029vMPQmtiNpy0jGmAmRADZBB1jV57ilWZ5BrwOC");
            useraccessdomain.setDomainName("zzS4cSDJLwaNkjfDVq7I8jmwgXZh8okElyO3YJafoZ4OHsuHm3");
            useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
            UserAccessDomain UserAccessDomainTest = useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
            UserAccessLevel useraccesslevel = new UserAccessLevel();
            useraccesslevel.setLevelDescription("HxOEINnkGsZpSmHJn3hbm4zGwwaze4gWdMfrKnIUf23mDuEwMj");
            useraccesslevel.setLevelHelp("HYiHg3Y3RVT1Pv769D3I0p9Y362sluCuP3VyCledCgMSjHdvlh");
            useraccesslevel.setLevelIcon("Gc0HJwvoQ7GxvwGbMFt81h03RmXuPXCv6vB1T4LqQxJ7r4wrKe");
            useraccesslevel.setLevelName("BiwNCa5bi3Jt4UhpmazRcSFCpNW11PuNUCnq1wSFEYLzYr8ikG");
            useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
            UserAccessLevel UserAccessLevelTest = useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
            user.setAllowMultipleLogin(1);
            user.setChangePasswordNextLogin(0);
            user.setGenTempOneTimePassword(1);
            user.setIsDeleted(0);
            user.setIsLocked(1);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(1);
            user.setPasswordAlgo("t9moWKiyUvvzR8Ydb61kUgVxcFrWXDAfmPiiOmT4Eoc1BEWvOO");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(772);
            user.setUserAccessCode(4);
            user.setUserAccessDomainId((java.lang.String) UserAccessDomainTest._getPrimarykey()); /* ******Adding refrenced table data */
            user.setUserAccessLevelId((java.lang.String) UserAccessLevelTest._getPrimarykey());
            Login login = new Login();
            corecontacts.setContactId(null);
            login.setCoreContacts(corecontacts);
            login.setFailedLoginAttempts(7);
            login.setIsAuthenticated(true);
            login.setLoginId("uSIWEfdDLsYrXjN4sYomMxh1KXH1ViFmOf5shwSdJVQYSraO4D");
            login.setServerAuthImage("kC8VBOgKajRnYYKCzvl4uJZ1P9HrkPLs");
            login.setServerAuthText("R0k3k9vKNBPrhtvb");
            user.setUserId(null);
            login.setUser(user);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            login.setEntityValidator(entityValidator);
            login.isValid();
            loginRepository.save(login);
            map.put("LoginPrimaryKey", login._getPrimarykey());
            map.put("CoreContactsPrimaryKey", login.getCoreContacts()._getPrimarykey());
            map.put("UserPrimaryKey", login.getUser()._getPrimarykey());
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
    private UserRepository<User> userRepository;

    @Autowired
    private UserAccessDomainRepository<UserAccessDomain> useraccessdomainRepository;

    @Autowired
    private UserAccessLevelRepository<UserAccessLevel> useraccesslevelRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            Login login = loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
            login.setFailedLoginAttempts(1);
            login.setLoginId("BN1QUiERCekAVUo09nZ2ZAh71wSeC0gfsLQ5Qfan74iDWyzG5z");
            login.setServerAuthImage("AMYWI0largK0iHXTY7Sr8sRShyczna5G");
            login.setServerAuthText("jkk2vxHWewesZyAq");
            login.setVersionId(1);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            loginRepository.update(login);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void testNQFindUnMappedUser() {
        try {
            loginRepository.FindUnMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQFindMappedUser() {
        try {
            loginRepository.FindMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.delete((java.lang.String) map.get("LoginPrimaryKey")); /* Deleting refrenced data */
            useraccesslevelRepository.delete((java.lang.String) map.get("UserAccessLevelPrimaryKey")); /* Deleting refrenced data */
            useraccessdomainRepository.delete((java.lang.String) map.get("UserAccessDomainPrimaryKey")); /* Deleting refrenced data */
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
