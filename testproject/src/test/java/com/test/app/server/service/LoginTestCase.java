package com.test.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.test.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.test.app.server.repository.LoginRepository;
import com.test.app.shared.authentication.Login;
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
import com.test.app.shared.authentication.User;
import com.test.app.server.repository.UserRepository;
import com.test.app.shared.authentication.UserAccessDomain;
import com.test.app.server.repository.UserAccessDomainRepository;
import com.test.app.shared.authentication.UserAccessLevel;
import com.test.app.server.repository.UserAccessLevelRepository;

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
            corecontacts.setAge(98);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("ReA2VsD00bvXiB34BCRpmgWn1mLbfajYKh1abd8VexN8vCWe9A");
            corecontacts.setFirstName("6JF442iisGKYESjdkk0MfCrEnQ0AQHufaeqgKdi0VgPj7LUD1F");
            Gender gender = new Gender();
            gender.setGender("82eDsENQI3Y1uIpzSVQOOpXk06rG0PIzSK5Ba5XBSzDRlBuE7N");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("XV");
            language.setAlpha3("tHx");
            language.setAlpha4("hCU4");
            language.setAlpha4parentid(2);
            language.setLanguage("ztrumoR0XRg4H0Jf8YvqbuP3WeLwCr090kk64UQPBv5XNyaAmj");
            language.setLanguageDescription("F2V3tkmiAyKwe6iPlYca80CjAtxEPPT3duCZ5JX6uT32SA0UvS");
            language.setLanguageIcon("decKtu6H1PYtmUiCqFugGaMZ1Z1NWaOEfyjgvOV6kU7XFKGD88");
            language.setLanguageType("ESEYloOGjUwNYrhAKiBFrCEETg5x5R0R");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("oSDcYw9CVJuvkHUTyQ7iGlVsIY1qCsP7J50B3WExNQdmj7Gmbr");
            timezone.setCountry("LkOugCOfhl1s8gVp4hxnXsNwPjnUOnd2uIMpHFqtLzPj6lpCDc");
            timezone.setGmtLabel("Yjv6RzZ1c7ckj3tiYFWgjP6mWKgtpv8X3mYV4z9WNBb3h3KIwm");
            timezone.setTimeZoneLabel("7EJIVvdBMnbNRbVzaQ9Rz8Q5ek6uVz0uYQHvypOTGDOlug8kSg");
            timezone.setUtcdifference(11);
            Title title = new Title();
            title.setTitles("dqiASVHD6V3Z7BjERCTCydtS3mIendNnVuTkW848MQqa3UJbaC");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(13);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("UBkKOoE5Rx0Vldb6TgGoC3fh0ThNO2iU9Yg20wZh5JZFe48xf6");
            corecontacts.setFirstName("B1osXQohaDIOmBRlcMpsqt4OMOURDZ6wfhc5ZJtdzasajo53Tw");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("g2z9Uu357OS5V01wvU8BhibAF1hK760kxycNRflN5W0SH1SrMH");
            corecontacts.setMiddleName("sgTSu0UuiznhMOqgbUJzoNCoXpjJ83lM7sRRxs3l0JtK9KRy8C");
            corecontacts.setNativeFirstName("vc3A4qQkmUCWI1zh6mjazuOojAKSCFEAs3lLJxRm5fljF3MPm6");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("F2II7oE5wkDVWX4xv3ouU2pOp4nBYgorIX1hyN3KoWZ1wnKf0E");
            corecontacts.setNativeMiddleName("Qt273GKGwocxGraD4lPlDE4MchIlHrEu6QOvG5eVPchiOCLEC6");
            corecontacts.setNativeTitle("WP2dEqLMNNraW5slzckQBdZahRoeum0KMTy87mwdAEErFepKuy");
            corecontacts.setPhoneNumber("mngglq1pEy4ydhFNXNVL");
            timezone.setTimeZoneId(null);
            corecontacts.setTimezone(timezoneRepository.save(timezone));
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            User user = new User();
            user.setAllowMultipleLogin(1);
            user.setChangePasswordNextLogin(0);
            user.setGenTempOneTimePassword(0);
            user.setIsDeleted(1);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(0);
            user.setPasswordAlgo("afVAAgdxyZmgtdypa1HVuwzYoAZ6k6snAfktY25bb7bZttMi8g");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(703);
            user.setUserAccessCode(1);
            UserAccessDomain useraccessdomain = new UserAccessDomain();
            useraccessdomain.setDomainDescription("d1DSH5oXLSWoOBkotjtCKVUOKEOXI84JPnn20QtZi995kNMlQN");
            useraccessdomain.setDomainHelp("cIgT3GKW5hOsraBC46hNeTYDqyrR89hbAAvbiFw3rS9MVf9GNO");
            useraccessdomain.setDomainIcon("cbctjwX46aeth5hT1KJtmjAi4ER0H86H9Kpsax4CP3fCOawQMI");
            useraccessdomain.setDomainName("qifsClDlpfyyvncRDjcAR7XVGL87QB1a5IEqWMnz6O1rjGV1nk");
            useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
            UserAccessDomain UserAccessDomainTest = useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
            UserAccessLevel useraccesslevel = new UserAccessLevel();
            useraccesslevel.setLevelDescription("8JfFCh1HE8ZOnPID0zuyWaY5t0GATMeO2EzGe3AIUFxrKk47p5");
            useraccesslevel.setLevelHelp("F86qh2ji4bIHyYmqf6Acyy7InRLKLqQSCdBzBrQuYk3z5A29FU");
            useraccesslevel.setLevelIcon("oRuelnEzKmc0RFMHeYgeVGnI4P6fmS2p9nuHpX7OUmAFpU6WLf");
            useraccesslevel.setLevelName("g5B5Lc4mkGLma6JdvAt2X4jjhoOPfoDtgozXU49nyjUozVywze");
            useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
            UserAccessLevel UserAccessLevelTest = useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
            user.setAllowMultipleLogin(0);
            user.setChangePasswordNextLogin(1);
            user.setGenTempOneTimePassword(1);
            user.setIsDeleted(0);
            user.setIsLocked(1);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(1);
            user.setPasswordAlgo("CklPnvHAjHvyhk2AAdiKvSGQEoYN23yvreHbVVd09nyqbaMnFN");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(1923);
            user.setUserAccessCode(4);
            user.setUserAccessDomainId((java.lang.String) UserAccessDomainTest._getPrimarykey()); /* ******Adding refrenced table data */
            user.setUserAccessLevelId((java.lang.String) UserAccessLevelTest._getPrimarykey());
            Login login = new Login();
            corecontacts.setContactId(null);
            login.setCoreContacts(corecontacts);
            login.setFailedLoginAttempts(6);
            login.setIsAuthenticated(true);
            login.setLoginId("Yf4vAJTy6JU1PQS82QMrGBMil4lPhCmTazkwmsliMRyfro5KJe");
            login.setServerAuthImage("kdkOXO8RYxuhoHuHETnanqsfvR6kmecF");
            login.setServerAuthText("ypcbB2hgEOeYL9kb");
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
            login.setLoginId("Ced326sTfb9pazjloivqr3W1WlIQcH7ddrRvFWK8N64HAaxcJM");
            login.setServerAuthImage("m2OAMZgXkLp68in5xBoQHonXqiDFuI0o");
            login.setServerAuthText("pTRz7E9FHctgmWxb");
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
